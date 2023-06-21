/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import { Button } from '@xsolla/accounts-babka-sdk'

type BabkaLoginButtonProps = {
  id: string
  className?: string
}

export default function BabkaLoginButton(props: BabkaLoginButtonProps) {
  const { id, className } = props
  const [isBabkaMounted, setIsBabkaMounted] = useState<boolean>(false)

  useEffect(() => {
    const babka = setTimeout(() => {
      if (!isBabkaMounted) {
        new Button({
          audience: ['https://xla-shop.loonops.com'],
          client_id: 4979,
          containerId: id,
          locale: 'en',
          popup: false,
          redirect_uri: 'http://localhost:5173',
          scope: ['email'],
          state: 'abcdefghij',
        })
        setIsBabkaMounted(true)
      }
    })

    return () => clearTimeout(babka)
  }, [])

  return <div id={id} className={className} />
}
