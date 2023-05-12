//Accetta i input il nome di una collection e ne restituisce TUTTI i documents 
import { useEffect, useState } from "react"
import { onSnapshot, collection } from "firebase/firestore";
import { firestore } from "../components/firebaseConfig";

//Ottiene in inut una collections e restiruisce tutti i suoi documenti
const useFirebaseFirestoneGetCollection = (collecthionInp) => {

    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const collectionRef = collection(firestore, collecthionInp);

        const unsub = onSnapshot(collectionRef, (collectionSnap) => {
           let documents = [];
          
           collectionSnap.forEach((doc) => {
               
                //Assegna a documents i campi del documento ed il suo id
                documents.push({...doc.data(), id: doc.id });
  
           })
           setDocs(documents);
        })
   
    }, [collecthionInp]);


    return {docs};
}

export default useFirebaseFirestoneGetCollection;