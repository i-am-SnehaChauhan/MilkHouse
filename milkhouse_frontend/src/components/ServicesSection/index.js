import React from 'react'
import Icon1 from '../../image/svg-1.svg'
import Icon2 from '../../image/svg-2.svg'
import Icon3 from '../../image/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
  return (
    
    <ServicesContainer id='services'>
        <ServicesWrapper>
           
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>E-Cattle Cart</ServicesH2>
                <ServicesP>Manage your livestock effectively which provides you all info at one place.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Milk Testing</ServicesH2>
                <ServicesP>Get your milk tested with the latest technologies and monitor from anywhere.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Shopping</ServicesH2>
                <ServicesP>Buy our fresh products directly from our dairy and Experience Health Benifits.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>


  );
}

export default Services
