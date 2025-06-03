import api from "../lib/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function CreateTrack() {
  const [form, setForm] = useState(null)
  const [file, setFile] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleUpload = async (e) => {
    try {
      e.preventDefault()
      setDisabled(true)
      const formdata = new FormData()
      formdata.append("song", file)
      console.log("formdata", formdata)
      console.log("file", file)
      const response = await api.post("/upload", formdata)
      createTrack(response.data.songUrl)
    } catch (error) {
      console.log(error)
    }
  }

  const createTrack = async (songUrl) => {
    try {
      const response = await api.post("/track", { ...form, fileUrl: songUrl })

      if (response.status === 201 || response.status === 200) {
        setDisabled(false)
        navigate("/tracks")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleUpload} className="center flex-col">
      <label htmlFor="song">Song</label>
      <input
        type="file"
        name="song"
        className="form-input"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <label htmlFor="title">Title</label>

      <input
        type="text"
        name="title"
        className="form-input"
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>

      <input
        type="text"
        name="description"
        className="form-input"
        onChange={handleChange}
      />
      <label htmlFor="duration">Duration (in sec)</label>

      <input
        type="number"
        name="duration"
        className="form-input"
        max="3600"
        onChange={handleChange}
      />
      <button type="submit" disabled={disabled}>
        submit!
      </button>
    </form>
  )
}

export default CreateTrack
