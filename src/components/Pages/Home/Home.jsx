import React , {createContext} from 'react'
import Navbar from '../../navbar/Navbar'
import Header from '../../header/Header'
import Feature from '../../Features/Feature'
// import Header from '../header/Header'
import Banner from '../../Banner/Banner'
import Banner2 from '../../Banner2/Banner2'
import Banner3 from '../../Banner3/Banner3'
import Form from '../../Form/Form'
const data=createContext();
const data1=createContext();
const Home = () => {
  const namee='ali';
  const last_name='ahmad';
  return (
    <div>
   <data.Provider value={namee}>
   <data1.Provider value={last_name}>
        <Navbar />
      <Header/>
      <Feature/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Banner/>
      <Form/>
      </data1.Provider>
      </data.Provider>
      {/* <Componen/> */}
    </div>
  )
}

export default Home
export {data , data1};