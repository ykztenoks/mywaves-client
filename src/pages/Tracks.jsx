import { useState, useEffect } from "react"
import api from "../lib/api"
import TrackCard from "../components/TrackCard"
import { Link } from "react-router-dom"

function Tracks({ tracks, setTracks }) {
  async function getTracks() {
    try {
      const response = await api.get("/track")

      setTracks(response.data)
    } catch (error) {
      console.log(error)
      return error
    }
  }

  useEffect(() => {
    getTracks()
  }, [])

  return (
    <div className="center flex-col">
      <Link to="/tracks/create">Submit your song</Link>
      <h2 className="text-2xl font-medium">All tracks</h2>
      <div className="center flex-col gap-4">
        {tracks ? (
          tracks.map((track, i) => (
            <TrackCard track={track} key={i} setTracks={setTracks} />
          ))
        ) : (
          <p>Loading..</p>
        )}
      </div>
    </div>
  )
}

export default Tracks
