import React from 'react'
import Row from './Row'
import Container from './Container'
import Card from './Card'
import Col from './Col'
import Grid from './Grid'

const Layout = (props) => {
  return (
    <>{props.children}</>
  )
}

Layout.Row = Row
Layout.Col = Col
Layout.Card = Card
Layout.Grid = Grid
Layout.Container = Container

export default Layout