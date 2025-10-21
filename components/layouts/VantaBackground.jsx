'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import WAVES from 'vanta/dist/vanta.waves.min'

export default function VantaBackground() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          waveHeight: 20,
          waveSpeed: 1.0,
          color: 0x5588,
          backgroundColor: 0x0a192f,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return <div ref={vantaRef} className="fixed inset-0 w-full h-full -z-10" />
}
