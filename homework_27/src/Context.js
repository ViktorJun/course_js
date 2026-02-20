import {createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const ContextProvider = ({ children }) => {
     const [color, setColor] = useState('light');
     const value = {
         color,
         setColor
     };
     return (
         <MyContext.Provider value={value}>
             {children}
         </MyContext.Provider>
     );
}

export const useMyContext = () => useContext(MyContext);
