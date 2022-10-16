import React from 'react'
import Spec1 from '../components/speciality-cards/SpecCard1'
import Spec2 from '../components/speciality-cards/SpecCard2'
import Spec3 from '../components/speciality-cards/SpecCard3'

function SpecialitySec() {
  return (
    <div>
        <section className='our-speciality'>
            <div className='container-fluid'>
                <Spec1></Spec1>
                <Spec2></Spec2>
                <Spec3></Spec3>
            </div>
        </section>
    </div>
  )
}

export default SpecialitySec


