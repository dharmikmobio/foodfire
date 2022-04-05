// import { async } from "@firebase/util"
import React, { useContext} from "react"
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
// import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {



  function resetPassword(email) {
    const auth = getAuth()
    return sendPasswordResetEmail(auth, email)
  }



  const value = {
       
    resetPassword,
  
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
