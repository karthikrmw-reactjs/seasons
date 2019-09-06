import React from 'react'
import ReactDOM  from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {
    state = { lat : null , errorMessage : '' };

    // invoked only only once, good to load data which needs to done once
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)  => { this.setState({ lat : position.coords.latitude })  },
            (err)       => { this.setState({ errorMessage : err.message }) }
        );
    }

    // required method
    render(){
        if(this.state.errorMessage === '' ){
            if( this.state.lat === null ){
                return ( <Spinner message = 'Please accept location request'/> );
            }else{
                return ( <SeasonDisplay lat={this.state.lat} /> )
            }
        }else{
            return ( <div> {this.state.errorMessage} </div> );
        }
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));
