import React, { Component } from 'react'
const skills = require('../data/skills.json')


interface Props {
    
}
interface State {
    
}

export default class Skills extends Component<Props, State> {
    state = {}

    render() {
        return (
           
    <section>
    <h2>Skills</h2>
    <ul>{skills.map((skill: any) => <li>{skill}</li> )}</ul>
  </section>
        )
    }
}