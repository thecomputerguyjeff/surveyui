import React from 'react'
import Search from './search'
import Grid from './grid'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fetchList: [
                this.getByTitle,
                this.getByAuthor,
            ],
            surveys: [
              //{
                //title:
                //description:
                //id:
              //},
            ],
        }
    }

    componentWillMount() {

    }
    //this.props.fetchList[0]("hello")
    render() {
        return (
            <div>
                <Search fetch={this.state.fetchList} />
                <Grid surveys={this.state.surveys} />
            </div>
        )
    }
    //fetch("url").then(res=>{res.json().then(body=>{)},err=>{});
    getByTitleEX = (title) => {
        fetch("https://ti-survey-server.herokuapp.com/api/getShellByTitle/" + title)
            .then((res) => res.json()
            , (err)=>{
                console.log("There is an error connecting to the website")
                console.log(err)
            })
            .then((res) => {
                console.log("success")
                this.setState({ surveys: res })
                debugger
            }
            , (err) => {
                console.log("There was an error converting to json")
                console.log(err)
            })
    }

    getByAuthor = (author) => {
        fetch("https://ti-survey-server.herokuapp.com/api/getShellByAuthor/" + author)
            .then((res) => res.json()
            ,(err)=>{
                console.log("There was an error connecting to the website")
                console.log(err)})
            .then((res) => {
                console.log("success")
                this.setState({ surveys: res })
                debugger
            }
            , (err) => {
                console.log("There is an error converting to json")
                console.log(err)
            })
    }

}

export default App;
