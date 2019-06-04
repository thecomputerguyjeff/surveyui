import React from 'react'
import RadioQuestion from './RadioQuestion'
import CheckBoxQuestion from './CheckBoxQuestion'
import { Input, Label, FormGroup ,Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
class TakeSurvey extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userAnswers: [],
      surveyTaker: {},
      checkedAlready: new Set(),
      renderModal:false
    }
  }

  render() {
    return (
      <div>
        {this.props.survey.questionList.map((q, i) => {
          switch (q.responseType) {
            case "Radio": {
              return <RadioQuestion question={q} key={i} index={i} onClick={(resp) => {
                this.handleClickRadio(resp, i)
              }} />
            }
            case "Checkbox": {
              return <CheckBoxQuestion question={q} index={i} onClick={(resp) => {
                this.handleClickCheck(resp, i)
              }} />
            }
            case "Freeform": {
              return (
                <FormGroup>
                  <Label htmlFor="answer">{q.question}</Label>
                  <Input type="textarea" name="text" id="exampleText"
                    onChange={(onChange) => this.handleInputChange(onChange, i)} />
                </FormGroup>)
            }
            case "Numeric": {
              return (
                <FormGroup>
                  <label htmlFor="answer">{q.question}</label>
                  <input type="number" id={q.question} name={q.question} onBlur={(onBlur) => this.handleInputChange(onBlur, i)}
                    min={q.responseChoices[0]} max={q.responseChoices[1]}>
                  </input>
                </FormGroup>
              )
            }
            default:{return(null)}
          }
        })
        }
        <FormGroup>
          <Label for="exampleText">Your Name</Label>
          <Input type="textarea" name="text" id="name" onChange={this.readName} />
          <Label for="exampleText">Your Email</Label>
          <Input type="textarea" name="text" id="email" onChange={this.readEmail} />
        </FormGroup>

        <button onClick={this.submit}>Submit</button>
        
        <div>
          <Modal isOpen={this.state.renderModal}  className={this.props.className}>
            <ModalHeader>Thank you.</ModalHeader>
            <ModalBody>
              Thank you for submitting you answers for this survey.
              Now you can create your own survey.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.openClose}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    )
  }

  openClose=()=>{
    window.open('/', '_self')
  }
  
  readName = (event) => {
    let taker = this.state.surveyTaker
    taker.name = event.target.value
    this.setState({ surveyTaker: taker })
  }
  readEmail = (event) => {
    let taker = this.state.surveyTaker
    taker.email = event.target.value
    this.setState({ surveyTaker: taker })
  }

  handleInputChange = (event, i) => {
    let arr = this.state.userAnswers
    arr[i] = (event.target.value)
    this.setState({ userAnswers: arr })
  }

  handleClickRadio = (answer, i) => {
    //let joined =this.state.userAnswers.concat(answer)
    let arr = this.state.userAnswers
    arr[i] = answer
    this.setState({ userAnswers: arr })
  }

  handleClickCheck = (answer, i) => {

    let arr = this.state.userAnswers
    if (arr[i] === undefined) {
      arr[i] = new Set();
    }
    if (arr[i].has(answer)) {
      arr[i].delete(answer)
    } else {
      arr[i].add(answer)
    }
    this.setState({ userAnswers: arr })
  }

  setUpAnswers = () => {
    let arr = this.state.userAnswers
    for (let i = 0; i < arr.length; i++) {
      if (typeof (arr[i]) === "object") {
        arr[i] = Array.from(arr[i]).toString()
      }
    }
    this.setState({ userAnswers: arr })
  }

  submit = () => {
    this.setUpAnswers()
    let data = {
      'shellId': this.props.id.toString,
      'surveyTaker': this.state.surveyTaker,
      'userAnswers': this.state.userAnswers
    }
    fetch('https://ti-survey-server.herokuapp.com/api/saveAnswers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((response) =>{
        if(response.status===200){
          this.setState({renderModal:true})
        }
      })
      .catch((error)=> {
        console.log("error=",error);
      });
  }
}

export default TakeSurvey