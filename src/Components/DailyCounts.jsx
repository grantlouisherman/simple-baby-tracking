import React, { Component } from 'react';
import CountCard from './CountCard'

class DailyCounts extends Component {
    constructor(){
        super()
        this.state = {
            timeTable: [],
            loadTimeTable: false
        }
    }
    nameConverter = name => {
        return {
            "wet-diaper": "wets",
            "fed": "feeds",
            "poop-diaper": "poops"
        }[name]
    }
    dailyCounts = fireBaseData => {
        const timeTable = {}
        Object.keys(fireBaseData).forEach(key => {
            const currentDay = new Date(key).getDate()
            const currentMonth = new Date(key).getMonth()+1
            const valueToUpdate = Object.keys(fireBaseData[key])[0]
            const dateKey = `${currentMonth}-${currentDay}`
            if(!timeTable[dateKey]) {
                timeTable[dateKey] = {
                    wets:0,
                    poops: 0,
                    feeds: 0
                }
                timeTable[dateKey][this.nameConverter(valueToUpdate)] =
                timeTable[dateKey][this.nameConverter(valueToUpdate)] + 1
            }else{
                timeTable[dateKey][this.nameConverter(valueToUpdate)] =
                timeTable[dateKey][this.nameConverter(valueToUpdate)] + 1
            }
          })
          return timeTable
    }

    sortTimeTableAscendingOrder = timeTableObj => {
        const numberToDateConverter = date => {
            const dateToArray = String(date).split("")
            dateToArray.splice(1, 0, "-")
            return dateToArray.join("")
        }
        let datesAsNumbers = Object.keys(timeTableObj).map(time => parseInt(time.replace("-","")))
        datesAsNumbers = datesAsNumbers.sort((a,b) => b-a)
        datesAsNumbers = datesAsNumbers.map(numberToDateConverter)
        return datesAsNumbers
    }

  
    componentWillMount(){
        this.setState({timeTable: this.dailyCounts(this.props.data), loadTimeTable: true})
    }
    render() {
        return (
            <div>
                {
                    this.state.loadTimeTable ? 
                    this.sortTimeTableAscendingOrder(this.state.timeTable).map(key =>(
                        <CountCard 
                        date={key}
                        wets={this.state.timeTable[key].wets}
                        poops={this.state.timeTable[key].poops}
                        feeds={this.state.timeTable[key].feeds}
                        />
                    ))
                    :
                    null
                }
            </div>
        )
    }
}

export default DailyCounts