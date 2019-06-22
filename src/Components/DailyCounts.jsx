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
            "poop-diaper": "poops",
            "Breast Milk": "breastFeeds",
            "Bottle": "bottleFeeds"

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
                    feeds: 0,
                    breastFeeds: 0,
                    bottleFeeds: 0
                }
            }
           
            if(fireBaseData[key][valueToUpdate].typeOfFeeding){
                const convertedName = this.nameConverter(fireBaseData[key][valueToUpdate].typeOfFeeding)
                
                timeTable[dateKey][convertedName] =
                timeTable[dateKey][convertedName] + 1
            }else {
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
                        breastFeeds={this.state.timeTable[key].breastFeeds}
                        bottleFeeds={this.state.timeTable[key].bottleFeeds}
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