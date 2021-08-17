import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function ScrollToTop(){

    const {pathname} = useLocation();

    useEffect(
        ()=>{
            const ac = new AbortController();
            window.scrollTo(0,0);
            return () => ac.abort(); 

        },
        [pathname]
          
    );

    return null;
}