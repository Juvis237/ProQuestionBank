import React from 'react'
import { practiceCardData } from '../../../data'
import PracticeCard from '../PracticeCard/PracticeCard'

const PracticeCardContainer = () => {
  return practiceCardData.map((card, index) => (
    <PracticeCard key={index} image={card.image} header={card.header} content={card.content} position={card.position} />
  ))
}

export default PracticeCardContainer