import { createContext, useState } from 'react'
import { useAPI } from '../Hooks/useAPI'

const DataContext = createContext()

const DataProvider = (props) => {
  const [month, setMonth] = useState('may')
  const [year, setYear] = useState('2022')
  const {
    items: operations,
    getItems: getOperations
  } = useAPI('https://finance-api-juanse.herokuapp.com/', [])

  function setPeriod (month, year) {
    setMonth(month)
    setYear(year)
  }

  return (
    <DataContext.Provider
      value={{
        month,
        year,
        setPeriod,
        operations,
        getOperations
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider }
