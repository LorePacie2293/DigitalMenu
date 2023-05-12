import { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'

//Determina il breakPoint attualmente impostato
const useDetermineBreakPoint = () => {

    //------ TODO - UTILIZZARE ENUM -------

    const [breakpoint, setBreakpoint] = useState(null);

    const smallHeightMobilePortrait = useMediaQuery({maxHeight: 568, orientation: 'portrait'})
    const largeHeightMobilePortrait = useMediaQuery({minHeight: 780, orientation: 'portrait'})
    const mobilePortrait = useMediaQuery({maxWidth: 480, orientation: 'portrait'})
    const mobileLandscape = useMediaQuery({maxHeight: 480, orientation: 'landscape'});
    const largeMonitor = useMediaQuery({minWidth: 1201});
    
    useEffect(() => {

        if(smallHeightMobilePortrait)
            setBreakpoint('smallHeightMobilePortrait')
        else if(mobileLandscape)
            setBreakpoint('mobileLandscape')
        else if(largeMonitor)
            setBreakpoint('largeMonitor')
        else if(mobilePortrait)
            setBreakpoint('mobilePortrait')
        else if(largeHeightMobilePortrait)
            setBreakpoint('largeHeightMobilePortrait')
        else
            setBreakpoint(null)

    }, [smallHeightMobilePortrait, mobileLandscape, largeMonitor, mobilePortrait])

    return breakpoint
}

export default useDetermineBreakPoint;
