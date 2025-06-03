import { useAuthContext } from "../context/auth.context"
import { useState } from "react"
function Login() {
  const { login } = useAuthContext()
  const [form, setForm] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(form, setErrorMsg)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[40vw] items-center justify-center"
    >
      <label htmlFor="email">email or username</label>

      <input
        required
        className="form-input"
        type="text"
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="password">password</label>
      <input
        required
        className="form-input"
        type="password"
        name="password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
      {errorMsg && <p>{errorMsg}</p>}
    </form>
  )
}

export default Login
