import React from 'react';
import './ClassBased.css'
class UsingClassBased extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <>
            
            <div className='classContainer'>
                <h2>This is created using Class  Component</h2>
                <p className='centerText'>This is done using external css</p>
                <p style={{color:'blue',textAlign:'center'}}>This is done using inline  css</p>
            </div>

            
            
            
            </>
        )
    }
}

export {UsingClassBased};