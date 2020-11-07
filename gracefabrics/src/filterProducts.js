import React, { Component } from 'react';


class filterProducts extends Component {
    constructor() {
        super();
        this.state = {
            search: ""
        };
    }

    handleChange(event) {
        this.setState({
            search: event.target.value
        })
        this.props.onChange(event.target.value)
    }


    render() {
        return (
            <div>
                <label htmlFor="filter">Search by product: </label>
                <input type="text" id="filter"
                    value={this.state.search}
                    onChange={this.handleChange.bind(this)}
                        />
            </div>

        )
   }
}

export default filterProducts;