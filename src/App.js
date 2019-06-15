import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button'
import DailyCounts from './Components/DailyCounts'

import { databaseRef } from './Components/firebaseconnection'

 class  App extends  Component {
   constructor(){
     super()
     this.state = {
       firebaseLoaded: false,
       firebaseData: [],
       countsData: {}
     }
   }
   transformData = obj => {
     const output = []
     let todaysDate = new Date ()
     todaysDate = todaysDate.getDate()
    Object.keys(obj).forEach(key => {
      if(new Date(key).getDate() === todaysDate ) {
        output.push({time:key, data: obj[key]})
      }
    })
    return output
   }
   componentDidMount(){
    databaseRef.on("value", (snapshot) => {
      this.setState({firebaseLoaded: true, firebaseData: this.transformData(snapshot.val()), countsData:snapshot.val() })
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
   }


  render(){
    return (
      <div className="App">
        <Button name='poop-diaper' firebaseRef={databaseRef}/>
        <Button name='wet-diaper' firebaseRef={databaseRef} />
        <Button name='fed' firebaseRef={databaseRef} />
        <ul>
        {
          this.state.firebaseLoaded ? 
          this.state.firebaseData.map(data => <li>{JSON.stringify( data, null, 4) }</li>)
          : null
        }
        </ul>
        {
          this.state.firebaseLoaded ? 
          <DailyCounts data={this.state.countsData} />
          : null
        }
      </div>
    );
  }
  
}

export default App;
