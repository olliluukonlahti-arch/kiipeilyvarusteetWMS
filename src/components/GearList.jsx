import "../styles/gearlist.css" // tyylit tälle listalle

const GearList = ({ gear, onSelect }) => {
  return (
    <div className="gear-list-wrapper">
      {gear.map((item) => {
        const yearsLeft =
          item.lifetimeYears - (new Date().getFullYear() - item.purchaseYear)

        const expired = yearsLeft <= 0

        return (
          <div
            key={item.id}
            className="gear-card"
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("text/plain", item.id)
            }
            onClick={() => onSelect(item)} // valitaan huoltojuttui varten
          >
            <img
              src={`/images/${item.image}`}
              alt={item.name}
              className="gear-image"
            /> 
            <h2>{item.name}</h2>
            <p>Kuvaus: {item.type}</p>
            <p>Ostettu: {item.purchaseYear}</p>
            <p style={{ color: expired ? "red" : "inherit" }}>
              {expired
                ? "Huomio! Käyttöikä loppunut!"
                : `Käyttöikää jäljellä: ${yearsLeft} vuotta`}
            </p>
          </div>
        )
      })}
    </div> // ktarkista 
  )
}

export default GearList
