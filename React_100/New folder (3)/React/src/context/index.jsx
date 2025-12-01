import { createContext, useContext, useState } from "react";

export const Globalcontext= createContext(null);


function Globalstate({children}){
    const [theme, settheme]=useState('light')
    const [size,setsize]=useState("fit")
    function handle(){
        settheme('dark');
    }
    return <Globalcontext.Provider  value={{theme,settheme,handle,size,setsize}}>{children}</Globalcontext.Provider>
}

export default Globalstate;