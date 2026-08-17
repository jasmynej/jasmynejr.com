import React from 'react'
import './styles.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Pokeno card shuffler and board generator',
  title: 'Pokeno Tools',
}

export default async function PokenoLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
