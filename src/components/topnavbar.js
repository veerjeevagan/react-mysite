import './topnavbar.css';
import React , {Component} from 'react';
import {BiBell} from 'react-icons/bi';
import {BsQuestionCircle , BsCircleFill} from 'react-icons/bs';


export default class Topnav extends Component{
    
    render() {
        return (
            <div className="top-nav">
                <div className="navbar navbar-default container-fluid">
                    <div className="h2 mysite purple-color"><i className="mx-1"><svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.9543 0 0 8.95431 0 20C0 31.0457 8.9543 40 20 40ZM9.69231 32.2111V14.5818C9.69231 14.3997 9.7815 14.2291 9.93119 14.1249L19.9113 7.17713C20.1032 7.04351 20.3583 7.04351 20.5502 7.17713L30.5304 14.1249C30.68 14.2291 30.7692 14.3997 30.7692 14.5818V28.6837C30.7692 28.9914 30.5193 29.2408 30.2109 29.2408H15.6607C15.5463 29.2408 15.4347 29.2759 15.3409 29.3413L10.5704 32.6678C10.2004 32.9259 9.69231 32.6617 9.69231 32.2111Z" fill="url(#paint0_linear)"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="2.90598" y1="36.2676" x2="36.7193" y2="-0.923466" gradientUnits="userSpaceOnUse">
                        <stop offset="0.276042" stop-color="#330B86"/>
                        <stop offset="1" stop-color="#7329C6"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        </i><span>MYSITE</span></div>
                    

                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link " href="#"><BsCircleFill/> <strong><small className="align-middle"> kishore</small></strong> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#"><BiBell/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><BsQuestionCircle/></a>
                        </li>
                    </ul>
                    

                </div>
                

            </div>
        )
    }
    

}