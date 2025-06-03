import TrackCard from "./TrackCard"
import { Link } from "react-router-dom"
function AlbumCard({ album }) {
  return (
    <div className="center flex-col gap-4">
      <Link to={`/albums/${album._id}`}>
        <img src={album.albumImage} alt="album image" className="w-[20vw]" />
        <h2>{album.name}</h2>
      </Link>
      <h3>{album.creator.username}</h3>
    </div>
  )
}

export default AlbumCard
