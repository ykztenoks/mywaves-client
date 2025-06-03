import { useAuthContext } from "../context/auth.context"
import { useState } from "react"
function Signup() {
  const { signup } = useAuthContext()
  const [form, setForm] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(form, setErrorMsg)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-[40vw] items-center justify-center"
    >
      <label htmlFor="username">username</label>
      <input
        className="form-input"
        type="text"
        name="username"
        required
        onChange={handleChange}
      />
      <label htmlFor="email">email</label>

      <input
        required
        className="form-input"
        type="email"
        name="email"
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
      <button type="submit">Sign up</button>
      {errorMsg && <p>{errorMsg}</p>}
    </form>
  )
}

export default Signup
