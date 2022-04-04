import React ,{useContext} from 'react';
import { auth } from '../logConfig';

const AuthContext = React.createContext();
export function AuthProvider({children}){
  return(
    <>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export function useAuth(){
  return useContext(AuthContext);
}
const resetPassword = (email) =>{
  return auth.sendPasswordResetEmail(email);
}

const value = {
  resetPassword,
};