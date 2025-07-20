import React from "react"
import "../styles/trashbin.css" // tyylit roskakorille

const TrashBin = ({ onDropToTrash }) => {
  // Jos jotain raahataan tän päälle ja päästetään irti
  const handleDrop = (e) => {
    e.preventDefault()
    const gearId = e.dataTransfer.getData("text/plain")
    onDropToTrash(gearId)
  }

  
  // Pitää sallia droppi
  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className="trash-bin"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      🗑️ Raahaa varuste tähän poistaaksesi 
    </div> //muuta vielä teksti
  )
}

export default TrashBin
