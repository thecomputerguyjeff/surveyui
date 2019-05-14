import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
            surveys: [],
        }
    }

    componentDidMount() {

        fetch('https://ti-survey-server.herokuapp.com/api/getAllShells')
        .then((response)=>response.json()
        , (err)=>{
            console.log("There is an error connecting to the database")
            console.log(err)
        })
        .then((res)=>{
            console.log("Success")
            this.setState({surveys: res})
        }
        , (err)=>{
            console.log("There was an error mapping to the json object")
            console.log(err)
        })
    }

    //this.props.fetchList[0]("hello")
    render() {
        
    library.add(faSearch);
        return (
            <div className="surveyTable">
                <Search fetch={this.state.fetchList} />
                <Grid surveys={this.state.surveys} />
            </div>
        );
    }
    //fetch("url").then(res=>{res.json().then(body=>{)},err=>{});
    getByTitle = (title) => {
        fetch("https://ti-survey-server.herokuapp.com/api/getShellByTitle/" + title)
            .then((res) => res.json()
            , (err)=>{
                console.log("There is an error connecting to the website")
                console.log(err)
            })
            .then((res) => {
                console.log("success")
                this.setState({ surveys: res })
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
            }
            , (err) => {
                console.log("There is an error converting to json")
                console.log(err)
            })
    }
}
export default App;
