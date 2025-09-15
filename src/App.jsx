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

const user={
name:'Ben',
city: 'NewYork',
country: 'USA',
continent: 'NA'
}

function App() {
  return (
    <div className="App">
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
</div>
      


  );
}

export default App;
