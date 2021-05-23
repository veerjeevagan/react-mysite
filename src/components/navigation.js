import React, { Component } from 'react';
import './navigation.css';
import {BiShieldQuarter} from "react-icons/bi"
import { GrProjects , GrBriefcase } from "react-icons/gr";

export default class Navigation extends Component {
    state = {
        active:3
    }
    render() {
        return (
          <>
              <nav className="m-1  navbar-light navbar-expand-md">
                    <button class ="navbar-toggler" type ="button" data-toggle ="collapse" data-target ="#colNav">
                        <span class ="navbar-toggler-icon">
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="colNav">
                        <ul className="navbar-nav flex-column">
                            <li onClick={()=>this.setState({active:1})} className={`pl-4 pr-4  point align-middle ${this.state.active==1?"active-left-bar":""}`} href="#"><GrProjects /> <small className="align-middle"> Projects</small></li>
                            <li onClick={()=>this.setState({active:2})} className={`pl-4 pr-4 point align-middle ${this.state.active==2?"active-left-bar":""}`} href="#"><GrBriefcase/> <small className="align-middle"> Organisation Profile</small></li>
                            <li onClick={()=>this.setState({active:3})} className={`pl-4 pr-4  point align-middle ${this.state.active==3?"active-left-bar":""}`} href="#"><BiShieldQuarter/><small className="align-middle"> Access Control</small></li>
                        </ul></div>
              </nav>
          </>
        );
    }
}
