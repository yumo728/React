import React from 'react'
import {NavLink} from 'react-router-dom'

export default function (props) {
  return <NavLink className="list-group-item" activeClassName='activeClass' {...props}></NavLink>
}