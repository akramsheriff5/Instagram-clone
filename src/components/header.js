import React from 'react'
import logo from '../public/logo.png';
import profile from '../public/profile.png';
import { TiHome , TiCompass , TiHeartOutline} from "react-icons/ti";
import { BiMessageRoundedMinus } from "react-icons/bi";

const header = () => {
    return (
            <div >
                <nav className='navbar fixed-top navbar-white bg-white border border-bottom mb-5'>
                    <div className="container">
                        <a className="navbar-brand" href="#">
                        <img src={logo} alt="instagram" className="img-fluid" alt="logo"/>
                        </a>

                        <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>

                        <div>
                            <a className="navbar-brand h2 text-dark" href="#">
                            <TiHome size={30}/>
                            </a>
                            <a className="navbar-brand h2 text-dark" href="#">
                            <BiMessageRoundedMinus  size={30} />
                            </a>
                            <a className="navbar-brand h2 text-dark" href="#">
                            <TiCompass size={30} />
                            </a>
                            <a className="navbar-brand h2 text-dark" href="#">
                            <TiHeartOutline size={30} />
                            </a>
                            
                            <a className="navbar-brand h2" href="#">
                            <img src={profile} className="border border-1 rounded-circle" width="7%" height="10%" alt="profile"/>
                            </a>
                        </div>
                    </div>

                </nav>
            </div>
    );
}
  

export default header;