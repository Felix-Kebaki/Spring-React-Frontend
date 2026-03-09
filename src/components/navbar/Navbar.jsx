import "./navbar.css"

import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <section className="NavbarMainSec">
        <div className="NavLogoMainDiv">
            <Link to="/">Full-stack Application</Link>
        </div>
        <div className="NavBtnMainDiv">
            <Link to="/addUser">
                Add User
            </Link>
        </div>
    </section>
  )
}
