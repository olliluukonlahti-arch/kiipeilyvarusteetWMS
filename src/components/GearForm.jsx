import { useRef, useState } from "react"
import { saveGear } from "../storage"
import "../styles/gearform.css" // Tyylit - OK

// Lomakkeella lisätään uusia varusteita listalle tai ns. pankkiin
const GearForm = ({ onAdd, gear }) => {
  const formRef = useRef()
  const [errors, setErrors] = useState({})

  
  // Perusvalidointia kentille ei mitään kovin kummallista 
  const validate = (form) => {
    const newErrors = {}

    if (!form.name.value.trim()) newErrors.name = "Lisää varuste!"
    if (!form.type.value.trim()) newErrors.type = "Lisää kuvaus varusteesta!"

    const year = parseInt(form.purchaseYear.value)
    const now = new Date().getFullYear()
    if (!year || year < 1990 || year > now)
      newErrors.purchaseYear = "Älä yritä! Anna oikea vuosiluku"

    const lifetime = parseInt(form.lifetimeYears.value)
    if (!lifetime || lifetime < 1 || lifetime > 50)
      newErrors.lifetimeYears = "Käyttöiän pitää olla 1-50 vuotta"

    if (!form.image.value.trim())
      newErrors.image = "Joku kuva on valittava!"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Lomakkeen lähetykseen!
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current

    if (!validate(form)) {
      form.reportValidity() // testaa vielä pitäisi tulla selamien oma varoitus - OK!
      return
    }

    // build varuste objekti uusi
    const newItem = {
      id: crypto.randomUUID(),
      name: form.name.value,
      type: form.type.value,
      purchaseYear: parseInt(form.purchaseYear.value),
      lifetimeYears: parseInt(form.lifetimeYears.value),
      image: form.image.value
    }

    // Päivitetään gear-tila ja tallennetaan localStorageen
    const updated = [...gear, newItem]
    saveGear(updated)
    onAdd(updated)

    form.reset()
    setErrors({})
    alert("Varuste lisätty!")
  }

  // Päälomake! --> Jos pitää saada uusia kuvia, ne voi lisätä /public/images ja koodit tähän... 
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="gear-form" noValidate>
      <h2>Lisää uusi varuste</h2>

      <label>
        Varuste:
        <input name="name" type="text" required />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Kuvaus:
        <input name="type" type="text" required />
        {errors.type && <span className="error">{errors.type}</span>}
      </label>

      <label>
        Ostovuosi:
        <input
          name="purchaseYear"
          type="number"
          required
          min="1990"
          max={new Date().getFullYear()}
        />
        {errors.purchaseYear && <span className="error">{errors.purchaseYear}</span>}
      </label>

      <label>
        Käyttöikä (vuotta):
        <input name="lifetimeYears" type="number" required min="1" max="50" />
        {errors.lifetimeYears && <span className="error">{errors.lifetimeYears}</span>}
      </label>

      <label>
        Valitse kuva:
        <select name="image" required>
          <option value="">-- Valitse varusteeseen sopiva kuva --</option>
          <option value="valjaat1.jpg">Valjaat</option>
          <option value="koysi1.jpeg">Köysi</option>
          <option value="kypara1.jpg">Kypärä</option>
          <option value="sulkurenkaat1.jpg">Sulkurenkaat</option>
          <option value="slingi1.jpg">Slingi</option>
          <option value="quickdraw1.jpg">Quickdraw</option>
          <option value="cam1.jpg">Cam (liikkuva kiila)</option>
          <option value="nut1.jpg">Nut / kiila</option>
          <option value="prusik1.jpg">Prusik</option>
          <option value="atc1.jpg">ATC</option>
          <option value="grigri1.jpg">Grigri</option>
          <option value="neox1.jpg">Neox</option>
        </select>
        {errors.image && <span className="error">{errors.image}</span>}
      </label>

      <button type="submit">Lisää</button>
    </form>
  )
}
// Gearformi on valmis! 
export default GearForm
