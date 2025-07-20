import { useState, useEffect } from 'react'
import GearList from './components/GearList'
import GearForm from './components/GearForm'
import TrashBin from './components/TrashBin'
import UsageCanvas from './components/UsageCanvas'
import Maintenance from './components/Maintenance'
import { loadGear, saveGear } from './storage'

import './styles/responsive.css'
import './app.css'

export default function App() {
  const [gear, setGear] = useState([])
  const [selectedGear, setSelectedGear] = useState(null)

  // ladataan varusteet localStoragesta
  useEffect(() => {
    const fetchData = async () => {
      const initialGear = await loadGear()
      setGear(initialGear)
    }
    fetchData()
  }, [])

  // kun varuste raahataan roskakoriin
  const handleDropToTrash = (gearId) => {
    const updatedGear = gear.filter((g) => g.id !== gearId)
    setGear(updatedGear)
    localStorage.setItem("gearData", JSON.stringify(updatedGear))
  }

  // kun lisätään uusi huoltomerkintä valitulle varusteelle
  const handleAddMaintenance = (gearId, note) => {
    const updatedGear = gear.map((item) => {
      if (item.id === gearId) {
        const newEntry = {
          date: new Date().toISOString().split("T")[0],
          note
        }

        const updatedHistory = item.maintenanceHistory
          ? [...item.maintenanceHistory, newEntry]
          : [newEntry]

        return { ...item, maintenanceHistory: updatedHistory }
      }
      return item
    })

    setGear(updatedGear)
    localStorage.setItem("gearData", JSON.stringify(updatedGear))
  }

  return (
    <div className='app-container'>
      <h1 className="text-2xl font-bold p-4">Kiipeilyvarusteet WMS</h1>

      <GearForm onAdd={setGear} gear={gear} />
      <GearList gear={gear} onSelect={setSelectedGear} />
      <Maintenance
        gear={selectedGear}
        onAddMaintenance={handleAddMaintenance}
      />
      <UsageCanvas gear={gear} />
      <TrashBin onDropToTrash={handleDropToTrash} />

      {/* pientä tyhjää tilaa roskakorin ja muun välillä */}
      <div style={{ height: "100px" }} />
    </div>
  )
}
