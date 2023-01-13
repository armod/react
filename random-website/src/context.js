import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ([children]) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return <AppContext.Provider>{children}</AppContext.Provider>
}
