import React from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

class FindHome extends React.Component {
state = { agents: [], agent: null, buyers: [], buyer: null, properties: [] }
  componentDidMount() {
    axios.get('/api/agents')
      .then( res => this.setState({ agents: res.data }) )
    }

    getProperties = (e, {value}) => {
  this.setState({ buyer: value }, () => {
    axios.get(`/api/buyers/${this.state.buyer}`)
      .then( res => this.setState({ properties: res.data }) )
   });
}


  agentList = () => {
    const { agents } = this.state;
    return agents.map( agent => {
      return { key: agent.id, text: `${agent.first_name} ${agent.last_name}`, value: agent.id }
    })
  }

  render () {
    return (
      <Form.Select options={this.agentList()} />
    )
  }
}

export default FindHome;
