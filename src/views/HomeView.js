import React from 'react'
import NavBarSec from '../sections/NavBarSec'
import JumboSec from '../sections/JumboSec'
import ProdCard from '../sections/productCardSec'
import WinterCard from '../sections/WinterClearSec'
import AdCards from '../sections/AdCardsSec'
import SpecCard from '../sections/SpecialitySec'


function Frontpage() {
  return (
    <div>
      <NavBarSec></NavBarSec>
      <JumboSec></JumboSec>
      <WinterCard></WinterCard>
      <ProdCard></ProdCard>
      <AdCards></AdCards>
      <SpecCard></SpecCard>
      </div>
  )
}

export default Frontpage