import React, {Component} from 'react';
import Management from './management';
import Infoblock from './infoblock';


export default class Infoblocks extends Component {
        constructor(props){
            super(props);
            this.state = {
                isDepartmentClicked:false,
                data:"",
                test:"hi"
            };
        }
        
        changeState = (data)=>{
            this.setState(
                {
                    isDepartmentClicked:!this.state.isDepartmentClicked,
                    data:data
                } ,()=>{
                    console.log('parent:' , this.state)
                } 
            );
            
        }

        
    

    render(){
        
        return(
            <>
                {this.state.isDepartmentClicked?<Management depState={this.state} changeDepartmentState={this.changeState}/>:<Infoblock depState={this.state} changeDepartmentState={this.changeState}/>}
            </>
            
        )
    }
}