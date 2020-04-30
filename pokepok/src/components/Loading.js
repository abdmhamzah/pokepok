import React from 'react'
import { Image } from 'react-bootstrap'

export default function Loading(){
  return (
    <div className="empty-detail">
      <div className="d-flex justify-content-md-center my-2">
        <Image
          src="https://cdn.iconscout.com/icon/free/png-512/pokemon-pokeball-game-go-34722.png"
          width="300"
          height="300"
          className="loading-animation"
        />
      </div>
    </div>
  )
}