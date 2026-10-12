import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Footer() {
  const navigate = useNavigate()
  return (
    <div>
      Made in china
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}
