import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function PHomeAVinDetial() {
  const { number } = useParams()
  const [vinItem, setVinItem] = useState([])

  useEffect(() => {
    const getVinItemData = async () => {
      const response = await axios.get(
        `http://localhost:3001/db-all-vr-album/ProductDt/${number}`
      )
      setVinItem(response.data[0])
      console.log('response', response.data[0])
    }
    console.log('vinItem', vinItem)
    console.log('sid', number)
    getVinItemData()
  }, [])

  return (
    <div className="menu-container box align-items-center">
      {vinItem && (
        <div>
          <h1>{vinItem.sid}</h1>
          <h1>{vinItem.number}</h1>
          <h1>{vinItem.vr_name}</h1>
        </div>
      )}
    </div>
  )
}

export default PHomeAVinDetial
