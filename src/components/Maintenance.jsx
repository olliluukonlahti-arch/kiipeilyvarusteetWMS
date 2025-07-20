import { useState } from "react"
import "../styles/maintenance.css" // tyylit löytyy

const Maintenance = ({ gear, onAddMaintenance }) => {
  const [note, setNote] = useState("")

  // ei saa näyttää mitään jos ei löydy 
  if (!gear) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!note.trim()) return

    // Huoltomerkintä tallennetaan
    onAddMaintenance(gear.id, note)
    setNote("")
  }

  return (
    <div className="maintenance">
      <h2>Huollot: {gear.name}</h2>

      <ul>
        {(gear.maintenanceHistory || []).map((entry, index) => (
          <li key={index}>
            {entry.date}: {entry.note}
          </li>
        ))}
      </ul>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Esim. köysi tarkastettu"
        />
        <button type="submit">Lisää huolto</button>
      </form>
    </div>
  )
}

export default Maintenance
