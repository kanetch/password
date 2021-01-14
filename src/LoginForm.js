import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      id: '',
      password: '',
    }
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form className='login-form'>
        <fieldset>
          <div className='user-input'>
            <label for='id'>ID</label>
            <input
              name='id'
              type='text'
              value={this.state.id}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className='user-input'>
            <label for='password'>Password</label>
            <input
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          </div>
        </fieldset>
      </form>
    )
  }
}

export default LoginForm
