import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            emailAddress: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <br />

                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <br />

                    <input
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
                        placeholder="Phone Number"
                    />
                    <br />

                    <input
                        name="emailAddress"
                        value={this.state.emailAddress}
                        onChange={this.handleChange}
                        placeholder="Email Address"
                    />
                    <br />


                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your phone number: {this.state.phoneNumber}</p>
                <p>Your email address: {this.state.emailAddress}</p>
            </main>
        )
    }
}

export default App
