import React from 'react';
import '../App.css';


const Button = (props) => {
  const onClickMethond = (type, databaseRef) => { 
    const timeRef = databaseRef.child(String(new Date()));
    const amount = type === 'fed' ? document.getElementById('amount').value : false
    const typeOfFeeding = type === 'fed' ? document.getElementById('type').value : false
    if( type === 'fed' && (!amount || !typeOfFeeding)){
      alert('You need to add amount of milk and type of milk')
    }
    console.log({ 'fed': { amount, typeOfFeeding } })
    switch(type){
      case 'poop-diaper':
          timeRef.set({ 'poop-diaper': 1 })
          break;
      case 'wet-diaper':
          timeRef.set({ 'wet-diaper': 1 })
          break;
      case 'fed':
          timeRef.set({ 'fed': { amount, typeOfFeeding } })
          break;
      default:
        break
    }
    
  }
  return ( 
    <div>
      <button 
      type="button"
      class="btn btn-lg btn-primary"
      id={`${props.name}`}
      onClick={() => { onClickMethond(props.name, props.firebaseRef) }}
      >
        {props.name}
      </button>
    {
      props.name === "fed" ? 
        <div>
          <label>
            Amount in Ounces
            <input id="amount" type="number" />
          </label>
        <label>
          Type of Feeding
        <select id="type">
          <option>Breast Milk</option>
          <option>Bottle</option>
        </select>
      </label>
      </div>
      : null
    }
    </div>
    
  )
}



export default Button