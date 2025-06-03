import api from "../lib/api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
function EditTrack() {
  const [form, setForm] = useState(null)
  const [file, setFile] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const { id } = useParams()

  const getTrack = async () => {
    try {
      const response = await api.get(`/track/${id}`)
      setForm(response.data)
    } catch (error) {
      console.log(error)
      return
    }
  }

  useEffect(() => {
    getTrack()
  }, [id])

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const createTrack = async (e) => {
    try {
      e.preventDefault()
      const response = await api.put(`/track/${id}`, form)

      if (response.status === 201 || response.status === 200) {
        setDisabled(false)
        navigate("/tracks")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return form ? (
    <form onSubmit={createTrack} className="center flex-col">
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
        value={form.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>

      <input
        type="text"
        name="description"
        className="form-input"
        value={form.description}
        onChange={handleChange}
      />
      <label htmlFor="duration">Duration (in sec)</label>

      <input
        type="number"
        name="duration"
        className="form-input"
        max="3600"
        value={form.duration}
        onChange={handleChange}
      />
      <button type="submit" disabled={disabled}>
        submit!
      </button>
    </form>
  ) : (
    <p>Loading...</p>
  )
}

export default EditTrack
