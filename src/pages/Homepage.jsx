import songwave from "../assets/images/soundwave.png"
import { Link } from "react-router-dom"
function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <h1>MY WAVES</h1>
      <div className="flex gap-4 m-4">
        <div className="center flex-col text-center border-2 rounded-md border-slate-400 p-2">
          <Link to="/tracks">
            Browse tracks
            <img
              src={songwave}
              alt="songwave"
              className="w-[20vw] h-[20vh] object-contain"
            />
          </Link>
        </div>

        <div className="center flex-col text-center  border-2 rounded-md border-slate-400 p-2">
          <Link to="/albums">
            Browse albums
            <img
              src="https://townsquare.media/site/295/files/2023/10/attachment-opener.jpg?w=780&q=75"
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
