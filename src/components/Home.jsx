import React from 'react'
// import Navbar from './Navbar';
import Main from './Main';
// import Company from './components/Company';
import CardSection from './CardSection';
import Steps from './Steps';
import Bentogrid from './Bentogrid';
import CompanyFeature from './CompanyFeature';
// import CompanyCards from './components/CompanyCards';
// import FeatureLine from './components/FeatureLine';
import FAQ from './FAQ';
const Home = () => {
  return (
    <div className='container12 md:my-0  md:px-auto md:py-0 mx-auto  w-100 '>

   {/* <Navbar/> */}
 
<Main/>
  {/* <Company/> */}
  <CardSection/>
  <Steps/>

  <Bentogrid/>
  <CompanyFeature/>
  {/* <FeatureLine/> */}
  <FAQ/>
 
  </div>
  )
}

export default Home