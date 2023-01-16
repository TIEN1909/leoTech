import React, { Children } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
type Props = {
    children: React.ReactNode
}

function Layout({children}: Props):React.ReactElement {
  return (
    <>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout