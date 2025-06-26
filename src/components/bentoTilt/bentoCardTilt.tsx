'use client'

import Tilt from 'react-parallax-tilt';

interface BentoCardTiltProps {
  children: React.ReactNode
  className?: string
}

export default function BentoCardTilt({ children, className = '' }: BentoCardTiltProps) {
  return (
    <Tilt
    className={className}
 tiltMaxAngleX={15}    
  tiltMaxAngleY={15}      
  glareEnable={true}  
  glareMaxOpacity={0.45}  
  scale={1.02}            
  perspective={1000} 
  
    >
      {children}
    </Tilt>
  )
}
