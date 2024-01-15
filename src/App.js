import React from 'react'
import Task1 from './component/Task1'
import Boxes from './component/Boxes';
import Card from './component/Card';
import Avatar from './component/Avatar';
import State from './component/State';


const App = () => {
  let stylesArr = [
    { width: "200px", height: "120px", backgroundColor: "violet" },
    { width: "400px", height: "110px", backgroundColor: "green"},
  ];
  return (
    <div>
      <Boxes stylesArr={stylesArr}/>
      <Task1/>
      <Card>
        <Avatar
          src="https://i.pinimg.com/474x/0e/1a/a0/0e1aa013543974a01ab6e6ff5ec14de4.jpg"
          alt=""
        />
      </Card>
      <State/>
    </div>
  )
}

export default App