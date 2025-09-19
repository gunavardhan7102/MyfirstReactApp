import React from 'react';
import './App.css';
import FirstComp from './propContainer/FirstComp';
import SecondComp from './propContainer/SecondComp';
import ThirdComp from './propContainer/ThirdComp';
import FourthComp from './propContainer/FourthComp'
import StateMgm from './StateMgm';
import ClickEvent from './ClickEvent';
import ScreenSize from './ScreenSize';
import FormEventExample from './FormEventExample';
import Notify from './Notify';
import SampleArray from './SampleArray';
import GetAPI from './GetAPI';
import PostAPI from './PostAPI';
import ShortCircuit from './ShortCircuit';
import MultiState from './MultiState';
import FirstPage from './Routing/FirstPage';
import SecondPage from './Routing/SecondPage';
import ThirdPage from './Routing/ThirdPage';
import FourthPage from './Routing/FourthPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Routing/Navbar';
import Delhi from './container/Delhi';
import { GiftProvider } from './context/ExampleContext';


const user={
name:'Ben',
city: 'NewYork',
country: 'USA',
continent: 'NA'
}

  const data = 'Guna'

function App() {
  return (
    <div className="App">
    <Navbar/>
      <SecondComp userobj={user} userobj2={user.city}/>
      <StateMgm/>
      <ClickEvent/>
      <ScreenSize/>
       <FormEventExample/>
       <Notify/>
       <SampleArray/>
       {/* <GetAPI/> */}
       <PostAPI/>
       <ShortCircuit/>
       <MultiState/>

<Routes>
  <Route path='/firstpage' element={<FirstPage/>} />
  <Route path='/secondpage' element={<SecondPage/>} />
  <Route path='/thirdpage' element={<ThirdPage/>} />
  <Route path='fourthpage' element={<FourthPage/>} />
</Routes>

  <GiftProvider>

  <Delhi />  
  </GiftProvider>

    
      
</div>
      


  );
}

export default App;
