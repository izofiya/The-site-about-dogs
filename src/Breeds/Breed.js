import React from 'react';

const Spinner = () => <div className="loader"></div>

export class Breed extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
        breedImage: null,
        isLoading: true
        }
    }

    fetchBreed () {
        let url = 'https://dog.ceo/api/breed/affenpinscher/images';
        if(this.props.breedName) {
            url = 'https://dog.ceo/api/breed/' + this.props.breedName + '/images';
        }
        setTimeout(() => {
        fetch(url).then(response => response.json()).then(breedImage => {
          this.setState({
            breedImage: breedImage,
            isLoading: false
          });
        })}, 500);
    }
    componentDidMount() {
        this.fetchBreed ();
        }
    componentDidUpdate(prevProps) {
        if(prevProps.breedName !== this.props.breedName) {
            this.setState({
                isLoading: true
            });
        }
        this.fetchBreed ();
        }
    render () {
        if(this.state.isLoading) {
            return <Spinner/>
        }
        return (
            <ul>    
                {this.state.breedImage.message.map((urlImg, index) => (
                    <li 
                    onClick = {() => this.props.onDogSelected(urlImg)}
                    className="liImgBreedClass"
                    key={index}>
                    <img className="imgClass"
                    src={urlImg}/>
                    </li>
                ))}
            </ul>
        )
    }
}