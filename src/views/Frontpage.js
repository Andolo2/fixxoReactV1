import React from 'react'
import NavBar from '../sections/NavBar'
import Jumbo from '../sections/Jumbo'
import ProdCard from '../sections/productCardSec'
import WinterCard from '../sections/WinterClearSec'
import AdCards from '../sections/AdCardsSec'
import SpecCard from '../sections/SpecialitySec'


function Frontpage() {
  return (
    <div>

      <NavBar></NavBar>
      <Jumbo></Jumbo>
      <WinterCard></WinterCard>
      <ProdCard></ProdCard>
      <AdCards></AdCards>
      <SpecCard></SpecCard>
      </div>
  )
}

export default Frontpage