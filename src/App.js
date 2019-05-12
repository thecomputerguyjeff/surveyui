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

        fetch('https://ti-survey-server.herokuapp.com/getAllShells').then(response=>this.setState({fetchList:response}));

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
    getByTitle = (title) => {
        fetch('www.surveysurver.com/getByTitle/'+title).then(
            res.json()).then(res=>this.setState({surveys: res}))
    }

}

export default App;
