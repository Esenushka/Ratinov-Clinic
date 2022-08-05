import React from 'react'
import Botulinum from '../../components/Botulinum/Botulinum'
import CallMe from '../../components/CallMe/CallMe'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import TopBlock from '../../components/TopBlock/TopBlock'

export default function BotulinumPage() {
  return (
    <div>
      <Header />
      <TopBlock bold={"Ботулинотерапия"} path={"Услуги"} secondPath={"Ботулинотерапия"} />
      <Botulinum />
      <CallMe />
      <Footer />
    </div>
  )
}
