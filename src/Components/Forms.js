import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(){
        super()
        this.state={
            name: "",
            subject: "",
            email: "",
            zipcode: "",
            phone: ""
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        const { enrolledAmount, average } = this.props;
        const { name, subject, email, zipcode, phone } = this.state;
        if (!name || !subject || !email || !phone || !zipcode) {
        window.alert("Input is invalid");
        } else if (phone.length !== 10) {
        window.alert("Phone number is not valid");
        } else if (zipcode.length !== 5) {
        window.alert("Zip code is not valid");
        } else {
        window.alert(
            `You are the teacher. \n
             You have ${enrolledAmount} students. \n  
             The average  ${average}`
        );
        }
    }

    handleInput= (e)=>{
        // let {name} = e.target.name
        // let {value}= e.target.value
     this.setState({
         [e.target.name]: e.target.value
     })
    }
    render() {
        return (
            <div>
             <form className="Form" onSubmit={this.handleSubmit}>
                <h2>Teacher Enrollment</h2>
                <label htmlFor={"name"}>Name</label>
                <input
                id={"name"}
                name="name"
                value={this.state.name}
                onChange={this.handleInput}
                />
                <label htmlFor={"subject"}>Subject</label>
                <input
                id={"subject"}
                name="subject"
                value={this.state.subject}
                onChange={this.handleInput}
                />
                <label htmlFor={"email"}>Email</label>
                <input
                id={"email"}
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
                />
                <label htmlFor={"zipCode"}>Zip Code</label>
                <input
                id={"zipcode"}
                name="zipcode"
                value={this.state.zipcode}
                onChange={this.handleInput}
                />
                <label htmlFor={"phone"}>Phone Number</label>
                <input
                id={"phone"}
                name="phone"
                value={this.state.phone}
                onChange={this.handleInput}
                />

                <button type="submit">Teach Class</button>
             </form>
                
            </div>
        )
    }
}

