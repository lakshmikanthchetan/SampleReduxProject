import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveBook extends Component {

    render() {
        if ( !this.props.activeBook ) {
            return <h3> Select any Book to View information </h3>
        }
        return (
            <div>
                <h3>Selected Book is : </h3>
                <div> { this.props.activeBook.title } </div>
                <div> No of pages : { this.props.activeBook.pages } </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(ActiveBook);
