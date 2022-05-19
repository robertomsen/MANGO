import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Exercise1Page from './pages/Exercise1Page/Exercise1Page'
import Exercise2Page from './pages/Exercise2Page/Exercise2Page'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="exercise1" element={<Exercise1Page />} />
        <Route exact path="exercise2" element={<Exercise2Page />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  )
}

export default App
