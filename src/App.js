import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faDotCircle, faCheckSquare, faICursor, faPercent } from '@fortawesome/free-solid-svg-icons'
import Search from './search'
import Grid from './grid'
import CreateSurveyPage from './createSurvey/createSurveyPage';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fetchList: [
                this.getByTitle,
                this.getByAuthor,
            ],
            surveys: [],
            page: "Search",
        }
    }

    componentWillMount() {

    }
    //this.props.fetchList[0]("hello")
    render() {
        
    library.add(faSearch, faDotCircle, faCheckSquare, faICursor, faPercent);
        return (
            //{(this.state.page==="Search") }
            // <div className="surveyTable">
            //     <Search fetch={this.state.fetchList} />
            //     <Grid surveys={this.state.surveys} />
            // </div>
            <CreateSurveyPage />
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
