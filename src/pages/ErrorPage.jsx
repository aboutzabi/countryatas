import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Oops! Something went wrong.</h1>
       {error && <p>{error.data}</p>}
       <NavLink to={'/'}>Go Home</NavLink>
    </div>
  )
}

export default ErrorPage