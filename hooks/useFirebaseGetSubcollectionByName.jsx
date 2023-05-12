import { useEffect, useState } from "react"
import { firestore } from "../components/firebaseConfig";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";

//Accetta in input il nome della collection ed il nome del documento e restituisce il contenuto del documento
const useFirebaseGetSubcollectionByName = (collectionName, documentName, subColl) => {
    
    //State dei documents restituiti
    const [subCollection, setSubCollection] = useState([]);

    useEffect(() => {
        const collectionRef = collection(firestore, `${collectionName}/${documentName}/${subColl}`) 
        
        const unsub = onSnapshot(collectionRef, (collectionSnap) => {
            
           let documents = [];
           collectionSnap.forEach((doc) => {
            
                //Assegna a documents i campi del documento ed il suo id
                documents.push({...doc.data(), id: doc.id });
           })
           setSubCollection(documents);
        })

    }, [collectionName, documentName, subColl]);

    return subCollection;
}

export default useFirebaseGetSubcollectionByName;