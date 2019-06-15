import React from 'react'

const CountCard = props => {
    console.log(props)
    return (
        <div class="card">
        <div class="card-body">
            <h2>Date</h2>
            <h5 class="card-title">{props.date}</h5>
            <h4>Wet Diapers</h4>
            <p class="card-text">{props.wets}</p>
            <h4>Poop Diapers</h4>
            <p class="card-text">{props.poops}</p>
            <h4># of Feeds</h4>
            <p class="card-text">{props.feeds}</p>
        </div>
        </div>
    )
}



export default CountCard