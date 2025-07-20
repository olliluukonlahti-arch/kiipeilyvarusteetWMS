import { useEffect, useRef } from "react"

const UsageCanvas = ({ gear }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!gear || gear.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")


    // Mitat ja layoutti
    const barHeight = 30
    const gap = 20
    const padding = 40
    const canvasWidth = 700
    const canvasHeight = gear.length * (barHeight + gap) + padding

    canvas.width = canvasWidth
    canvas.height = canvasHeight

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.font = "16px Arial"

    gear.forEach((item, index) => {
      // Lasketaan montako vuotta on jo käytetty
      const yearsUsed = new Date().getFullYear() - item.purchaseYear



      // Prosentteina koska menee rikki 
      // --> VAIHDETTU! prosentteina kuinka suuri osa on vielä käyttöiästä jäljellä 
      const percentLeft = Math.max(1 - yearsUsed / item.lifetimeYears, 0)

      const percentText = Math.round(percentLeft * 100) + "% käyttöikää"

      const x = 150
      const y = padding + index * (barHeight + gap)

      const fullBarWidth = 400
      const usedBarWidth = fullBarWidth * percentLeft

      // Varusteen nimi
      ctx.fillStyle = "#000"
      ctx.fillText(item.name, 10, y + barHeight / 1.5)

      // Harmaa taustapalkki (täysi käyttöikä)
      ctx.fillStyle = "#ddd"
      ctx.fillRect(x, y, fullBarWidth, barHeight)

      // Vihreä/punainen palkki riippuu paljonko jäljellä
      ctx.fillStyle = percentLeft > 0.2 ? "#4caf50" : "#f44336"
      ctx.fillRect(x, y, usedBarWidth, barHeight)

      
      // Prosenttiteksti
      ctx.fillStyle = "#000"
      ctx.fillText(percentText, x + fullBarWidth + 10, y + barHeight / 1.5)
    })
  }, [gear])
// varustelista nimi vaihdettu check muualta
  return (
    <div style={{ overflowX: "auto", marginTop: "2rem" }}>
      <h2>Varustelista</h2>
      <canvas ref={canvasRef} style={{ border: "1px solid #ccc" }}></canvas>
    </div>
  )
}

export default UsageCanvas
