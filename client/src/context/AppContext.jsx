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
    <AppContextProvider value={value}>
        {props.children}
    </AppContextProvider>
  );
};

export default AppContextProvider
