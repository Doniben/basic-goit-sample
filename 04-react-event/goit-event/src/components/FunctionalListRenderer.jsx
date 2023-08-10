import React, { useState, useEffect } from 'react'

export const FunctionalListRenderer = () => {
  const [ event, setEvent ] = useState(null)

  useEffect(() => {
    const handleMessage = e => {
      setEvent(e)
    }
    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <div>
      {event && <p>Functional component: {JSON.stringify(event.data.message)}</p>}
    </div>
  )
}
