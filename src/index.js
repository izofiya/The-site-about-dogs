import React from 'react';
import ReactDOM from 'react-dom';
import {Breeds} from './Breeds/Breeds.js';
import {Breed} from './Breeds/Breed.js';
import {Dog} from './Breeds/Dog.js';
import './index.css';

class Panel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isActiveItem: false,
      token: '+ ',
      breed: '',
      dog: ''
    }
  }

  render() {
   return (
     <div className="breedsClass"> 
         <h3 
         onClick={() => this.setState({
             isActiveItem: !this.state.isActiveItem,
             token: (this.state.token === '+ ' ? '- ' : '+ '),
             breed: '',
             dog: ''
         })}
         >{this.state.token}BREEDS LIST</h3>
         <hr />
         {this.state.dog ? <Dog dog={this.state.dog}/> : null}
         {this.state.breed ? <Breed
            onDogSelected = {dog => {
                this.setState({
                  dog: dog
                })
            }}
            breedName={this.state.breed}
         /> : null}
         {this.state.isActiveItem ? <Breeds
            isActive={this.state.breed}
            onBreedsSelected = {breed => {
                this.setState({
                    breed: breed,
                    dog: ''
                })
            }}
         /> : null}
     </div>  
   )}
}

ReactDOM.render(<Panel />, document.getElementById('root'));