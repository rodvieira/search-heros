import React, { useEffect } from 'react'
import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'

import { Logo } from '@/components'

const Home: React.FC = () => {
  const fetchUsers = async () => {
    const request = new AxiosHttpGetClient()
    const response = await request.get({ url: '/characters' })
  };

  useEffect(() => {
    fetchUsers();
  }, [])

  return <Logo />
}

export default Home