import React, {Component} from 'react';

class ContactForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {};

        
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("submit event: ", e);
        console.log("target: ", e.target);
    }

    handleChange(e){
        e.preventDefault();
        console.log("change event: ", e.target.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )
    }
}


export default ContactForm;