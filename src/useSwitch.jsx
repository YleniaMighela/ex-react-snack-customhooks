
import { useState, useCallback } from "react";

export default function useSwitch(initialValue = false) {

    const [isOn, setIsOn] = useState(initialValue);

    // useCallback memorizza la funzione `toggle`, così da non ricrearla ad ogni render 
    const toggle = useCallback(() => {
        setIsOn(prev => !prev);
    }, []);

    return [isOn, toggle];
}