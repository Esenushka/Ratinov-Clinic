import Header from "../components/Header/Header";
import MainSlider from "../components/MainSlider/MainSlider";

import OwnerBlock from "../components/OwnerBlock/OwnerBlock";

import TreatBlock from "../components/TreatBlock/TreatBlock";


export default function HomePage() {
  return (
    <div>
      <Header />
      <MainSlider />

      <OwnerBlock/>

      <TreatBlock />

    </div>
  )
}
