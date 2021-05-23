import React, {Component} from 'react';
import {BiTable} from 'react-icons/bi';
import {FaRss} from 'react-icons/fa';
import {HiOutlineRefresh} from 'react-icons/hi';
import './topsmallnav.css';

export default class Topsmallnav extends Component {
    state = {
        active:1
    }


    render() {
        return(
            <div className=" mt-3 topsmallnav-container">
                    <div className=" d-flex justify-content-between mx-4 ">
                        <div className="d-flex">
                                <a  onClick={()=>this.setState({active:1})} className={`px-1 py-2 point ${this.state.active==1?"active ":""}`}><FaRss/> <small className="align-middle">Permission |</small></a>
                                <a  onClick={()=>this.setState({active:2})} className={`px-1 py-2 point ${this.state.active==2?"active":""}`}> <BiTable/><small className="align-middle"> Approval Matrix</small> </a>
                        </div>
                        <div className="px-1"><HiOutlineRefresh/><small><small> Last synced 15 mins ago</small></small></div>
                        
                    </div>
                    {/* <hr></hr> */}
            </div>
        );
    }
}