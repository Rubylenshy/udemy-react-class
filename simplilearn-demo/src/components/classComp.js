import React from "react";

export class classComp extends React.Component(){
    render(){
        return <code>React regular classes extends the component class, they
            always contain a 'render()' function return HTML
        </code>
    }
}

class classCompNew extends React.Component(){
    render(){
        return <code>React regular classes (another one) extends the component class, they
            always contain a 'render()' function return HTML
        </code>
    }
}

export default classCompNew;