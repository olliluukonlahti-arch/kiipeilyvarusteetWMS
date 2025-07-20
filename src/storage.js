// src/storage.js

// Haetaan varustelista joko localStoragesta tai gear.jsonista
export const loadGear = async () => {
  const localData = localStorage.getItem("gearData")

  
  if (localData) {
    const parsed = JSON.parse(localData)
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed // Käytetään localStorage-tietoa jos siellä jotain on
    }
  }

  // jos ei ollut mitään tallennettua --> ladataan esimerkkidata tiedostosta
  const response = await fetch("/gear.json")
  const data = await response.json()

  // tallennetaan localStorageen heti, niin ei tarvitse hakea toista kertaa
  localStorage.setItem("gearData", JSON.stringify(data))
  return data
}

// Tallennetaan gear-muuttujan sisältö localStorageen
export const saveGear = (gear) => {
  localStorage.setItem("gearData", JSON.stringify(gear))
}
