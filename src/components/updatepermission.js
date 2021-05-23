import React , {Component} from 'react';
import "./updatepermission.css";

export default class Updatepermission extends Component {
    render(){
        return(
           <div>
               
               <div className="container update-container border-bottom">
                   
                   <div className="ml-5 row">
                        <div className="col-sm-3">
                            <div className="d-flex flex-column  align-items-start ">
                                Access Control
               
                                <label ><input type="radio"/> All Access</label>
               
                                <label ><input type="radio"/> Restricted Access</label>
                            </div>
                            
                        </div>
                        <div className=" col-sm-1 vl"></div>

                        <div className="col-sm-8">
                            <div className="d-flex flex-column align-items-start ">
                                Permission
                                <label><input type="checkbox" /> View items in access</label>
                                <label><input type="checkbox"/> Edit items in access</label>
                                <label><input type="checkbox"/> Create items in access</label>
                                <label><input type="checkbox"/> Delete items in access</label>
                            </div>
                        </div>
                    </div>
               
               
               </div>
           </div>
                
        )
    }
}