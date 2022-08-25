import { Link } from "react-router-dom";


export default function LinkTop({ to, children,className }) {

  const handleClick = () => {
    window.scrollTo(0, 0)
  }
  return (
    <Link className={"linkTop " + className} to={to}>
      <div onClick={handleClick}>
        {children}
      </div>
    </Link>
  )
}
