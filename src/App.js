import React from 'react'
import './App.css'
import Image from './images/test.jpg'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  state = {
    Person: {
      fullName: 'default',
      bio: 'coucou',
      imgSrc: 'test',
      profession: 'test',
    },
    show: false,
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.handleClick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleClick = () =>
    this.setState((prevState) => {
      let Person = Object.assign({}, prevState.Person)
      Person.fullName = 'someothername'
      Person.bio = 'b'
      Person.imgSrc = Image
      Person.profession = 'ingénieur'
      return { Person, show: !prevState.show, date: new Date() }
    })
  render() {
    return (
      <>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        {this.state.show && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img
              src={this.state.Person.imgSrc}
              width="150px"
              height="150px"
              alt="image"
            />
            <h1>{this.state.Person.profession}</h1>
          </div>
        )}
        <button onClick={this.handleClick}> click here</button>
      </>
    )
  }
}

export default App
