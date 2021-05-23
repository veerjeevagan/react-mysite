import React , {Component} from 'react';
import departmentsdata from './departmentsdata';
import './infoblock.css';
import {BsCircle} from 'react-icons/bs';
import {AiOutlineEye , AiOutlineDelete} from 'react-icons/ai';
import {BiPencil} from 'react-icons/bi'

export default class Infoblock extends Component {
    constructor(props){
        super(props);
    }

    handleClick = (name) =>{
        this.props.changeDepartmentState({name});
        console.log(this.props);
    }
    
   

    render() {
        return(
            <div className="info-block  m-5">
                <div className="add-role mb-4 mx-2 py-1 pl-4 pr-5">+ Add Role</div>
                <BiPencil className="m-4"/><AiOutlineDelete/>
                <div className="table-responsive text-nowrap infotable">
                    <table className="table b ">
                        <thead>
                            <tr className="bg-color">
                                <th scope="col"></th>
                                <th className="align-data-left" scope="col"><small>Department/Role name</small></th>
                                <th scope="col"><small>Access level</small></th>
                                <th scope="col"><small>No. of members</small></th>
                                <th scope="col"><small>Last updated</small></th>
                                <th scope="col "></th>
                            </tr>
                        </thead>
                        <tbody>
                    
                            {departmentsdata.map(data=>(
                    
                    
                                        <tr key ={data.key} >
                                            <td className="opacity-3"><BsCircle/></td>
                                            <td className="align-data-left"><span  className="changeDep" onClick={()=>this.handleClick(data.department)}>{data.department}</span></td>
                                            <td className="rel "><span className={data.access}>{data.access}</span></td>
                                            <td >{data.members}</td>
                                            <td >{data.updatetime}</td>
                                            <td ><AiOutlineEye/></td>
                                        </tr>
                    
                    
                            ))}
                    
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}