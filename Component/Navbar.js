import Link from 'next/link'
import { S_IFLNK } from 'constants'

const Navbar=()=>(
    < div >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                <a className="navbar-brand h-1" href="#">Movies</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link href="/">
                            <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                            </a>
                        </Link>                     
                    </li>
                       
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link" href="#">About</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/services">
                            <a className="nav-link" href="#">Services</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/contact">
                            <a className="nav-link" href="#">Contact</a>
                        </Link>
                    </li>
                   
                    </ul>
                </div>
                </div>
            </nav>

    </div>
)
export default Navbar;