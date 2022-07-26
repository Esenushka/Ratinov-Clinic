import CallMe from "../components/CallMe/CallMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ServiceBlock from "../components/ServiceBlock/ServiceBlock";
import TopBlock from "../components/TopBlock/TopBlock";
import { servicesList } from "../constants/ServicesList";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <TopBlock bold={"Услуги"} path={"Услуги"} />
      <div className="container services_wrapper">
        {
          servicesList.map((service) => <ServiceBlock key={service.id} {...service} />)
        }
      </div>
      <CallMe />
      <Footer />
    </>
  )
}
