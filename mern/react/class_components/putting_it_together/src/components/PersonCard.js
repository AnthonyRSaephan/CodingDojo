import React, { Component } from 'react'

export class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            age : props.age
        }
    }

    incrementBirthday = () => {
        // console.log(`Birthday is now ${this.state.age}`) oops this didn't console as expected. Forgot to not use this
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        const {firstName, lastName, hairColor} = this.props

        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: hairColor</p>
                <button onClick={this.incrementBirthday}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard