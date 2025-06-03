import { useState, useEffect } from "react"
import api from "../lib/api"
import AlbumCard from "../components/AlbumCard"
function Albums() {
  const [albums, setAlbums] = useState(null)

  const getAlbums = async () => {
    try {
      const response = await api.get("/project")

      setAlbums(response.data)
    } catch (error) {
      console.log(error)
      return
    }
  }

  useEffect(() => {
    getAlbums()
  }, [])
  return (
    <div>
      {albums ? (
        albums.map((album, i) => <AlbumCard key={i} album={album} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Albums
