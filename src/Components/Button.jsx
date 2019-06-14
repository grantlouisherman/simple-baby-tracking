import React from 'react';
import '../App.css';


const Button = (props) => {
  const onClickMethond = (type, databaseRef) => { 
    var timeRef = databaseRef.child(String(new Date()));
    switch(type){
      case 'poop-diaper':
          timeRef.set({ 'poop-diaper': 1 })
          break;
      case 'wet-diaper':
          timeRef.set({ 'wet-diaper': 1 })
          break;
      case 'fed':
          timeRef.set({ 'fed': 1 })
          break;
      default:
        break
    }
    
  }
  return ( 
    <button 
    type="button"
    class="btn btn-lg btn-primary"
    id={`${props.name}`}
    onClick={() => { onClickMethond(props.name, props.firebaseRef) }}
    >
      {props.name}
    </button>
  )
}



export default Button