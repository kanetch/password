import LoginForm from './LoginForm'

function App() {
  return (
    <div className='flex flex-col items-center px-8'>
      <div className='py-2'>
        ブラウザにパスワードを自動生成させるためのダミーページです。
      </div>
      <div className='w-full max-w-sm'>
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default App
