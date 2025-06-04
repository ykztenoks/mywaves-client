import songwave from "../assets/images/soundwave.png"
import logo from "../assets/images/mywaves-logo.png"
import vynil from "../assets/images/vynil.png"
import { Link } from "react-router-dom"
function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <img src={logo} alt="logo" className="h-[50vh]" />
      <div className="flex gap-4 m-4">
        <div className="center ring-[#BA9A71]/50 hover:ring-2 flex-col text-center shadow-md rounded-md p-2 scaleup">
          <Link to="/tracks">
            browse tracks
            <img
              src={songwave}
              alt="songwave"
              className="w-[20vw] h-[20vh] object-cover"
            />
          </Link>
        </div>

        <div className="center ring-[#BA9A71]/50 hover:ring-2 flex-col text-center  shadow-md rounded-md p-2 scaleup">
          <Link to="/albums">
            browse albums
            <img
              src={vynil}
              alt="songwave"
              className="w-[20vw] h-[20vh] object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage
