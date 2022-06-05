import { useState, useContext } from 'react'
import axios from 'axios'
import { AppContext } from '../Context/appContext'

function useAPI ({ baseURL, initialValue }) {
  const { token } = useContext(AppContext)
  const [items, setItems] = useState(initialValue)

  const api = axios.create({
    baseURL: '',
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  async function getItems (path) {
    try {
      const { data } = await api.get(path)
      setItems(data)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    items,
    getItems
  }
}

export { useAPI }
