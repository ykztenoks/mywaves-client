import { useContext, createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../lib/api"
const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const login = async (info, setErrorMsg) => {
    try {
      setLoading(true)
      const response = await api.post("/user/login", info)

      setUser(response.data.user)

      if (response.data.authToken) {
        localStorage.setItem("authToken", response.data.authToken)
        setLoading(false)
        setIsLoggedIn(true)
        setUser(response.data.user)
      }
    } catch (error) {
      console.log(error)
      setErrorMsg(error.response.data.message)
      return error
    }
  }
  const signup = async (info, setErrorMsg) => {
    try {
      const response = await api.post("/user/signup", info)

      if (response.status === 201) {
        navigate("/login")
      }
    } catch (error) {
      console.log(error)
      setErrorMsg(error.response.data.message + "❌")
      return error
    }
  }

  const logout = () => {
    localStorage.clear()
    setUser(null)
    setIsLoggedIn(false)
  }

  const verify = async () => {
    try {
      setLoading(false)

      const token = localStorage.getItem("authToken")

      if (!token) {
        return
      }
      const response = await api.get("/user/verify")

      if (response.status === 200) {
        setUser(response.data.user)
        setLoading(false)
        setIsLoggedIn(true)
      } else {
        setUser(null)
        setLoading(false)
        setIsLoggedIn(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    verify()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("context must be used inside a provider")
  }
  return context
}

export { AuthContext, AuthProvider }
