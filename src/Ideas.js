import React, { Fragment } from 'react';
import Card from './Card';
import './Ideas.css';

// const Ideas = (props) => {
//   return (
//     <h2>Hello, {props.name}!</h2>
//   )
// }

// const Ideas = (props) => {
//     const { name } = props;
  
//     return (
//       <h2>Hello, {name}!</h2>
//     )
// }

const Ideas = ({ideas, deleteIdea}) => {

    const ideaCards = ideas.map(idea => {
      return (
        <Card
          title={idea.title}
          description={idea.description}
          id={idea.id}
          key={idea.id}
          deleteIdea={deleteIdea}
        />
      )
    })
  
    return (
      <div className='ideas-container'>
        {ideaCards}
      </div>
    )
  }
  
  export default Ideas;