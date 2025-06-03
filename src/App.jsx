import "./App.css"
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Albums from "./pages/Albums"
import Tracks from "./pages/Tracks"
import TrackDetails from "./pages/TrackDetails"
import CreateAlbum from "./pages/CreateAlbum"
import CreateTrack from "./pages/CreateTrack"
import NotFound from "./pages/NotFound"
import AlbumDetails from "./pages/AlbumDetails"
import Navbar from "./components/Navbar"
import EditTrack from "./pages/EditTrack"
import { useState } from "react"
function App() {
  const [tracks, setTracks] = useState(null)
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums" element={<Albums />} />
        <Route
          path="/tracks"
          element={<Tracks tracks={tracks} setTracks={setTracks} />}
        />
        <Route path="/albums/:id" element={<AlbumDetails />} />
        <Route path="/tracks/:id" element={<TrackDetails />} />
        <Route path="/albums/create" element={<CreateAlbum />} />
        <Route path="/tracks/create" element={<CreateTrack />} />
        <Route
          path="/tracks/edit/:id"
          element={<EditTrack tracks={tracks} setTracks={setTracks} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
