import React, { Component} from 'react';

class Like extends Component{

    state={
        count:0
    }

    incrementMe = () => {
        let newCount = this.state.count + 1;
        this.setState({
            count: newCount

        })
    }
    render(){
    return (
        <div>
            <button className="like" onClick={this.incrementMe} >❤️ {this.state.count} </button>
        </div>
    )
    }
}

export default Like;