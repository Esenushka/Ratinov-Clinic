import { Link, useLocation } from "react-router-dom";


export default function LinkTop({ to, children,className }) {
  const location = useLocation()
  return (
    <Link aria-disabled className={"linkTop " + className} to={location.pathname === "/services/spine" ? "#?" : to}>
      <div>
        {children}
      </div>
    </Link>
  )
}
