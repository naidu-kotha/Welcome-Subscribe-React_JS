// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribed: false}

  changeState = () => {
    this.setState(prevState => ({subscribed: !prevState.subscribed}))
  }

  render() {
    const {subscribed} = this.state
    const text = subscribed ? 'Subscribed' : 'Subscribe'
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="message">Thank you! Happy Learning</p>
        <button type="button" onClick={this.changeState}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
