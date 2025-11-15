import React, { useContext } from 'react'
import { MyContext } from '../Context/ContextProvider'

const Login = () => {
  const { LoginSubmitFun , loginEmail, setLoginEmail , loginPassword , setLoginPassword} = useContext(MyContext)
  return (
    <>
      <div className='login-wrapper'>
        <div className='login-card shadow'>
            
                <h1 className='text-center'>login</h1>
              <form onSubmit={LoginSubmitFun}>
                  <input type='text' className='form-control my-3' placeholder='Enter Email' value={loginEmail} onChange={e => setLoginEmail(e.target.value)}/>
                <input type='password' className='form-control my-3' placeholder='Enter Password' value={loginPassword} onChange={e => setLoginPassword(e.target.value)}/>
               <input type='submit' className='btn btn-primary w-100' />
              </form>
            </div>
        </div>
     
    </>
  )
}

export default Login