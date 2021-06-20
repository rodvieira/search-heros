import React, { useEffect } from 'react'
import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'

const Home: React.FC = () => {
  const fetchUsers = async () => {
    const request = new AxiosHttpGetClient()
    const response = await request.get({ url: '/characters' })
    
    console.log(response);
  };

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div>
      Ola Mundo!
    </div>
  )
}

export default Home