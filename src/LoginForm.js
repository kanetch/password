import { useState } from 'react'

function LoginForm(props) {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className='login-form'>
      <fieldset>
        <div className='user-input'>
          <label htmlFor='id'>ID</label>
          <input
            name='id'
            type='text'
            value={id}
            onChange={e => setId(e.target.value)}
          ></input>
        </div>
        <div className='user-input'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>
      </fieldset>
    </form>
  )
}

export default LoginForm
