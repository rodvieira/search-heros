import React, { useEffect } from 'react'
import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'

import { HeaderHome } from '@/components'
import Styles from './home-styles.scss'

const Home: React.FC = () => {
  const fetchUsers = async () => {
    const request = new AxiosHttpGetClient()
    const response = await request.get({ url: '/characters' })
  };

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className={Styles.home}>
      <HeaderHome />
    </div>
  )
}

export default Home