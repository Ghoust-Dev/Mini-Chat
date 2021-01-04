import React, { Component } from 'react';
import Chat from './components/Chat';
import Response from './components/Response';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      message: '',
      response: []
    };
  }

  handleChange = event => {
      const { name, value } = event.target;

      this.setState({ 
          [name] : value,
      });
  }
  
  user = Date.now()
  ws = new WebSocket(`ws://localhost:8000/ws/${this.user}`);

  handleSubmit = async event => {
      event.preventDefault();

      const chat = {
          pseudo: this.state.pseudo,
          message: this.state.message
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
        <Chat 
          msg={this.state.msg}
          pseudo={this.state.pseudo}
          handleChange={this.handleChange}
          handleSubmit= {this.handleSubmit}
        />
        <Response response={this.state.response}/>

      </>
    );
  }
}

export default App;
