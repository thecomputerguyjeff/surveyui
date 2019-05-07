import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ""
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ searchValue: event.target.value })
    }

    render() {
        return (
            <div>
                <label>
                    Search:
    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <br />
                <button onClick={() => this.props.fetch[2](this.state.searchValue)}> SearchByAuthor </button>
                <br />
                <button onClick={() => this.props.fetch[1](this.state.searchValue)}>SearchByTitle</button>

            </div>
        )
    }

}

export default Search;