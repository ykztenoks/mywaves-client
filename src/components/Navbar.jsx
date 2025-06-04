import { Link } from "react-router-dom"
import { useAuthContext } from "../context/auth.context"
import { useEffect, useRef, useState } from "react"
import icon from "../assets/images/soundwave2.png"
import avatar from "../assets/images/avatar.png"

function Navbar() {
  const { user, logout } = useAuthContext()
  const [open, setOpen] = useState(false)
  const openRef = useRef(null)

  useEffect(() => {
    const handleClickOut = (e) => {
      if (openRef.current && !openRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClickOut)
    return () => document.removeEventListener("click", handleClickOut)
  }, [])

  return (
    <nav
      ref={openRef}
      className="w-full  bg-[#EAE5DD] shadow-2xs h-[10vh] flex text-center justify-evenly items-center rounded-b-md fixed top-0 z-50"
    >
      <Link to="/" className="hover">
        <img src={icon} alt="icon" className="w-12 object-cover" />
      </Link>

      <Link to="/tracks" className="hover">
        browse tracks
      </Link>
      <Link to="/albums" className="hover">
        browse albums
      </Link>
      <Link to="/about" className="hover">
        about
      </Link>
      {user ? (
        <>
          <Link to="/profile"> profile</Link>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <>
          <img
            src={avatar}
            alt="avatar"
            className="h-8"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="absolute  top-16 left-[82.5%] flex flex-col bg-[#dfd9ce] mt-2 w-28 h-28 justify-evenly rounded-md  ring-[#BA9A71]/50 ring-2">
              <Link
                to="/login"
                className="hover ring-[#BA9A71]/50 hover:ring-2 rounded-md h-[50%] center "
              >
                login
              </Link>
              <Link
                to="/signup"
                className="hover ring-[#b1a182]/50 hover:ring-2 rounded-md h-[50%] center "
              >
                signup
              </Link>
            </div>
          )}
        </>
      )}
    </nav>
  )
}

export default Navbar
