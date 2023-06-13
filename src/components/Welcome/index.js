// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  isChange = () => {
    const {text} = this.state

    if (text === 'Subscribe') {
      this.setState(() => ({text: 'Subscribed'}))
    } else {
      this.setState(() => ({text: 'Subscribe'}))
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <h5>Thank you! Happy Learning</h5>
        <button type="button" className="btn" onClick={this.isChange}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
