import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage (key, initialValue);
    
    return [someValue, setSomeValue];
};

export default useDarkMode;