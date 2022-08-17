import { Link } from "react-router-dom";


export default function LinkTop({ to, children }) {

  const handleClick = () => {
    window.scrollTo(0, 0)
  }
  return (
    <Link to={to}>
      <p onClick={handleClick}>
        {children}
      </p>
    </Link>
  )
}
