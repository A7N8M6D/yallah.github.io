import React, { Component } from "react";

class Componen extends React.Component {
constructor()
{
  
        super();
        this.state= {

            name:'anil'
        };
    
    }
    componentDidMount()
    {
       console.log('component mounted');
    }
    componentDidUpdate()
    {
        console.log('component update');
    }
    shouldComponentUpdate()
    {
        console.log('component should updated');
    }
    componentWillUnmount()
    {
        console.log('component unmounted');
    }
render
(){
    console.log('component rendered');
    return(
        <>
       <h1>{this.state.name}hello</h1>
       </>
    );
    }
}
export default Componen;