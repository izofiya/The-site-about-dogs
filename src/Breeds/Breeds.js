import React from 'react';

const Spinner = () => <div className="loader"></div>

export class Breeds extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
        isLoading: true,
        breedsList: ''
        }
    }
    componentDidMount() {
        setTimeout(() => {
            fetch('https://dog.ceo/api/breeds/list').then(response => response.json()).then(breedsList => {
          this.setState({
            breedsList: breedsList,
            isLoading: false
          });
        }
        )}, 500);
        }
    render () {
        if(this.state.isLoading) {
            return <Spinner/>
        }
        return (
            <div>
            <ul>    
                {this.state.breedsList.message.map((breed, index) => (
                    <li
                    className={this.props.isActive === breed ? "activeItemClass" : null} 
                    key={index}
                    onClick={() => this.props.onBreedsSelected(breed)}
                    >{breed}
                    </li>
                ))}
            </ul>
            </div>
        )
    }
}
