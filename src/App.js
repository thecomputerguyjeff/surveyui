import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faDotCircle, faCheckSquare, faICursor, faPercent } from '@fortawesome/free-solid-svg-icons'
import Search from './search'
import Grid from './grid'
import CreateSurveyPage from './createSurvey/createSurveyPage';
import RenderAnswers from './RenderAnswers';
//import { constants } from 'http2';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fetchList: [
                this.getByTitle,
                this.getByAuthor,
            ],
            surveys: [],
            render: 'Search',
            renderKey: '',
            page: "Search",
        }
    }

    componentWillMount() {

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
        
    library.add(faSearch, faDotCircle, faCheckSquare, faICursor, faPercent);
        return (
            <div className="surveyTable">
                <Search fetch={this.state.fetchList} />
                {this.state.render==='Search' &&<Grid surveys={this.state.surveys} onClick={this.renderAnswer}/>}
                {this.state.render==='Answers' && <RenderAnswers id={this.state.renderKey} />}
            </div>
        );
    }

    renderAnswer=(surveyID)=>{
        this.setState({renderKey:surveyID, render:'Answers'})
    }

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