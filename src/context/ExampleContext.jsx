import { createContext, useContext, useState } from "react";

const GiftContext = createContext();

export const GiftProvider = ({children}) => {

const[surprise, setsurprise] = useState('default');
const[surpriseobj, setsurpriseobj] = useState(
    {
        name:'guna',
        age:24
    }
);

return(
    <GiftContext.Provider value={{surprise,setsurprise,surpriseobj,setsurpriseobj}}>
        {children}
    </GiftContext.Provider>
)

}

export const useData = () => useContext(GiftContext)