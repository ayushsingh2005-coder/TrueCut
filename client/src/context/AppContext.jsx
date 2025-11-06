import { useEffect, useState } from "react";
import { createContext } from "react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false); //to see the actual credit the user have
  const [image , setImage] = useState(false); //to uplaod the image for removing the bg 
  const [resultIMage ,setResultImage ] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const { getToken } = useAuth();
  const {isSignedIn} = useUser();
  const { openSignIn } = useClerk();

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token : token}
      });

      if (data.success) {
        setCredit(data.credits);
        console.log(data.credits)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // remove bg
  const removeBg = async (image) => {
      try {
        // first we check whether the user is logged in or not so that we get all his info for further usage evaluation ? go on : go to login
        if(!isSignedIn){
            return openSignIn();
        }
        setImage(image);  //now image variable have some value 
        setResultImage(false);

        navigate('/result');

        const token = await getToken()

        const formData = new FormData()
        image && formData.append('image' , image)

        const {data} = await axios.post(backendUrl+'/api/image/remove-bg',formData ,{headers : {token}});

        if(data.success)
        
        
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
  }


  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,setImage,
    removeBg
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
