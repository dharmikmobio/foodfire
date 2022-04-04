import React from 'react'
import Header from './Header'


const Layout = (props) => {
  return (
    <>
    <Header/>
        <div className="content">
            {props.children}
        </div>

  

    </>
  )
}

export default Layout