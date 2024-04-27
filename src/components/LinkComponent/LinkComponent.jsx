import React from 'react'
import { Link } from 'react-router-dom'

const LinkComponent = ({path, children, clas}) => {
  return (
    <Link className={clas} to={path}>{children}</Link>
  )
}

export default LinkComponent