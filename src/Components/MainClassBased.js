import React from "react";
import "./styles.css"
import  {UsingClassBased} from './UsingClassBased'
import {UsingFunctionBased} from './UsingFunctionBased'
class MainClassBased extends React.Component{
    constructor(){
        super()
        this.state={
            box1:false,
            box2:false
        }
    }


    render(){
        return(
        <> 
        <div className="container">
            <h1 className="heading">Styling using Functional and Class Component</h1>
        <div className="box_contianer">
            <button className="box"  onClick={()=>this.setState({box1:!this.state.box1})}>
                To see Styling in funtional   Component
            </button>
            <button className="box" onClick={()=>this.setState({box2:!this.state.box2})} 
                style={{backgroundColor:"aqua"}}>
                To see Styling in class   Component
            </button>
        </div>
        <div className="secondary_box_container">

        { this.state.box1 && <UsingFunctionBased/>  }
        { this.state.box2 && <UsingClassBased/>  }
        </div>
        
        </div>
        </>
        )
    }
}

export {MainClassBased};