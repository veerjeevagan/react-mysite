import React,{Component} from 'react';
import managementdata from './managementdata';
import "./management.css";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';
import Updatepermission from './updatepermission';
import {IoMdArrowBack} from 'react-icons/io';
import {BiPencil} from 'react-icons/bi'

export default class Management extends Component {
    constructor(props){
        super(props);
        this.handleClick.bind(this);
        this.state = {
            toggleName:"none",
            // changeComponent:"no"
        };
    }

    
    handleClick = () =>{
        this.props.changeDepartmentState();
        console.log(this.props);
    }

    clickEvent = (departmentName)=>{
        {this.state.toggleName=="none"?this.setState({toggleName:departmentName} , ()=>{console.log("state changed")}):this.setState({toggleName:"none"})}
        
    }

    
    render(){

        
    
        return(
               <div className="management-wrapper p-5">
                    <div className="d-flex ml-2">
                        <div className="point mx-2" onClick={()=>this.handleClick()}><IoMdArrowBack/></div>
                        <div className="purple-color">{this.props.depState.data.name} team</div>
                        <div className="mx-3"><BiPencil/></div>
                    </div>
                    <div className="management-block  m-5">
                        <div className="container border-bottom bg-color py-2">
                            <div className="row no-gutters">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-3">Department/Role name</div>
                                <div className="col-sm-2 text-center">Access level</div>
                                <div className="col-sm-3 text-center">Summary</div>
                                <div className="col-sm-2 text-center">Last updated</div>
                                <div className="col-sm-1 text-center"></div>
                            </div>
                        </div>
                    
                    
                            {managementdata.map(data=>(
                    
                    
                    
                                            <div key={data.key}>
                                                <div className="container  py-2 ">
                                                    <div className={`row no-gutters ${this.state.toggleName==data.department?"no-border-bottom":"border-bottom"}`}>
                                                        <div className="col-sm-1">{this.state.toggleName==data.department?
                                                        <AiOutlineMinusCircle
                                                            className="opacity-3 point"
                                                            onClick={()=>this.clickEvent(data.department)}
                                                            data-toggle="collapse"
                                                            data-target="#collapsedinfo"/>
                                                        :<AiOutlinePlusCircle
                                                            className="opacity-3 point"
                                                            onClick={()=>this.clickEvent(data.department)}
                                                            data-toggle="collapse"
                                                            data-target="#collapsedinfo"/>}
                                                        </div>
                                                        <div className="col-sm-3 text-left">{data.department}
                                                            {this.state.toggleName==data.department?<small><br></br>All aspects in the {data.department} module</small>:""}
                                                        </div>
                                                        <div className="col-sm-2 text-center "><span className= {this.state.toggleName==data.department?"no-display":data.access}>{data.access}</span></div>
                                                        <div className="col-sm-3 text-center">{data.summary}</div>
                                                        <div className="col-sm-2 text-center">{data.updatetime}</div>
                                                        <div className="col-sm-1 text-center"><label className="box">
                                                            <input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label></div>
                                                    </div>
                                                </div>
                                                 {this.state.toggleName==data.department?
                    
                                                    <Updatepermission department={data.department} id="collapsedinfo" className="collapse"/>
                                                 : null}
                                            </div>
                    
                    
                    
                            ))}
                             
                                </div>
                </div>)
                
} 
}