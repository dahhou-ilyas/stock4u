"use client"

import Login from '@/components/Login'
import Registre from '@/components/registre'
import React, { useState } from 'react'

type Props = {}

const LoginPage = (props: Props) => {

  const [isLogin,setIsLogin]=useState(true);

  return (
    <>
        {
          isLogin ? <Login setIsLogin={setIsLogin} /> : <Registre setIsLogin={setIsLogin}/>
        }
    </>
  )
}

export default LoginPage