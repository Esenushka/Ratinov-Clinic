import CallMe from "../../components/CallMe/CallMe"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Therapeutic from "../../components/Therapeutic/Therapeutic"
import TopBlock from "../../components/TopBlock/TopBlock"

export default function TherapeuticPage() {

  return (
    <div>
      <Header />
      <TopBlock
        bold={'лечебной физкультуры'}
        text={'курс'}
        reverse path={'Услуги'}
        secondPath={'Курс лечебной физкультуры'}
      />
      <Therapeutic />
      <CallMe />
      <Footer />
    </div>
  )
}
