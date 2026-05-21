import React from 'react'
import AdoptionCard from '../cards/AdoptionCard'

function MyRequest({order}) {
  return (
    <AdoptionCard {...{order}} />
  )
}

export default MyRequest