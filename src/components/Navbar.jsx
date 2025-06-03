import { Link } from "react-router-dom"
import icon from "../assets/images/icon.png"
import { useAuthContext } from "../context/auth.context"

function Navbar() {
  const { user, logout } = useAuthContext()
  return (
    <div className="w-full bg-slate-400 h-[8vh] flex text-center justify-evenly items-center ">
      <Link to="/" className="hover:text-slate-600">
        <img src={icon} alt="icon" className="w-8" />
      </Link>
      <Link to="/about" className="hover:text-slate-600">
        About
      </Link>

      <Link to="/tracks" className="hover:text-slate-600">
        Browse tracks
      </Link>
      <Link to="/albums" className="hover:text-slate-600">
        Browse albums
      </Link>
      {user ? (
        <>
          <Link to="/profile"> Profile</Link>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <>
          <Link to="/login" className="hover:text-slate-600">
            Login
          </Link>
          <Link to="/signup" className="hover:text-slate-600">
            Signup
          </Link>
        </>
      )}
    </div>
  )
}

export default Navbar
