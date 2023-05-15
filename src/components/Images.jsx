import React, { useEffect, useRef, useState } from 'react'

const Images = (props) => {
  const [inView, setInView] = useState(false)
  const ref = useRef()

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true)
      }
    })
  }

  useEffect(() => {
    let observer = new IntersectionObserver(callback)

    if (ref?.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return inView ? (<img {...props}/>) : (
    <div>
      <img
        ref={ref}
        style={{ width: '50vw', height: '90vh', backgroundColor: '#ddd' }} />
    </div>
  )
}

export default Images