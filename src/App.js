import React, { Component } from 'react';
/* import { BrowserRouter, Route, Switch } from 'react-router-dom'; */
import Chat from './components/Chat';
import Response from './components/Response';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      message: '',
      userID: '',
      response: [],
    };
  }

  user = Date.now()    
  ws = new WebSocket(`ws://localhost:8000/ws/${this.user}`);

  handleChange = event => {
      const { name, value } = event.target;

      this.setState({ 
          [name] : value,
      });

      this.state.userID = this.user;
  }
  
  

  handleSubmit = async event => {
      event.preventDefault();

      const chat = {
          pseudo: this.state.pseudo,
          message: this.state.message,
          userID: this.state.userID
        };

      this.ws.send(JSON.stringify(chat));
  }

  componentDidMount() {

      this.ws.onopen = () => {
        console.log('connected')
      }

      this.ws.onmessage = function(event) {
        let data = JSON.parse(event.data);
        this.setState({ response: [...this.state.response, data]});
      }.bind(this);

      this.ws.onclose = () => {
          console.log('disconnected')    
      }
  }   
  
  componentWillUnmount() {
    this.setState = (state,callback)=>{
        return;
    };
  }

  render() {
    return (
      <>
      {/* <BrowserRouter>
        <Switch>
          <Route path="/"> */}
            <Chat 
              msg={this.state.msg}
              pseudo={this.state.pseudo}
              handleChange={this.handleChange}
              handleSubmit= {this.handleSubmit}
            />
          {/* </Route>
          <Route path="/chat"> */}
            <Response 
              response={this.state.response}
              userID = {this.user}
            />
          {/* </Route>
        </Switch>
      </BrowserRouter> */}
        
        

      </>
    );
  }
}

export default App;
