import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
       const [credit , setCredit] = useState(false)

        const loadCreditsData = async() =>{
            try {

                
                
            } catch (error) {
                
            }

        }

  const value = {
        

  };

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider
