import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export function useDarkMode(){
    const [value, setValue]= useLocalStorage("darkmode");

    useEffect(() => {
        const body= window.document.body;

        if (value) {
            //if true we are adding dark mode to the body
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode');
        }
    }, [value] );
    return [value, setValue];
}