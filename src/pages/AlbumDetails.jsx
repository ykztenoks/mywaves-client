import api from "../lib/api"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import TrackCard from "../components/TrackCard"
function AlbumDetails() {
  const [album, setAlbum] = useState()
  const { id } = useParams()

  const getAlbum = async () => {
    try {
      const response = await api.get(`/project/${id}`)
      setAlbum(response.data)
    } catch (error) {
      console.log(error)
      return
    }
  }

  useEffect(() => {
    getAlbum()
  }, [id])

  return (
    <div>
      {album ? (
        <>
          <img src={album.albumImage} alt="album image" className="w-[30vw]" />
          <h2>{album.name}</h2>
          <p>{album.description}</p>
          <span>{album.status}</span>

          {album.tracks ? (
            <div>
              {album.tracks.map((track, i) => (
                <TrackCard track={track} key={i} />
              ))}
            </div>
          ) : (
            <p>No tracks in this album yet </p>
          )}
        </>
      ) : (
        <span> Loading</span>
      )}
    </div>
  )
}

export default AlbumDetails
