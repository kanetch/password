import { useState } from 'react'

function LoginForm() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='flex justify-center'>
      <form className='w-full'>
        <div className='py-2'>
          <label>
            <span className='block text-left'>ID</span>
            <input
              className='w-full border-b-2 border-blue-300 bg-gray-100 px-2 py-2 focus:bg-white focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-blue-200'
              type='text'
              name='id'
              value={id}
              required
              onChange={e => setId(e.target.value)}
            ></input>
          </label>
        </div>
        <div className='py-2'>
          <label>
            <span className='block text-left'>Password</span>
            <input
              className='w-full border-b-2 border-blue-300 bg-gray-100 px-2 py-2 focus:bg-white focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-blue-200'
              type='password'
              name='password'
              autoComplete='new-password'
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            ></input>
          </label>
        </div>
        <div className='py-4'>
          <input
            className='w-full bg-gray-300 py-2 font-semibold text-white'
            type='submit'
            value='LOGIN'
            disabled
          ></input>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
