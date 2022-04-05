import React, { useContext} from "react"
import { auth } from "../logConfig"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
 
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
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
