import AudioPlayer from "react-h5-audio-player"
import { useAuthContext } from "../context/auth.context"
import { Link } from "react-router-dom"
import api from "../lib/api"

function TrackCard({ track, setTracks }) {
  const { user } = useAuthContext()

  const handleDelete = async () => {
    try {
      const confirmed = confirm("Are you sure you want to delete?")
      if (confirmed) {
        const response = await api.delete(`/track/${track._id}`)

        if (response.status === 200) {
          setTracks((prev) =>
            prev.filter((current) => current._id !== track._id)
          )
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="center flex-col gap-4 border-2 border-slate-400 rounded-md">
      <h3>
        song: <span>{track.title}</span>
      </h3>
      <span>
        artist: <span>{track.uploadedBy.username}</span>
      </span>
      <span>
        release date: <span>{track.releaseDate}</span>
      </span>
      <AudioPlayer src={track.fileUrl} />
      {user && user._id === track.uploadedBy._id && (
        <>
          <Link to={`/tracks/edit/${track._id}`}>edit track</Link>
          <button onClick={handleDelete}>delete song</button>
        </>
      )}
    </div>
  )
}

export default TrackCard
