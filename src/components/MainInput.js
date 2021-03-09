import React, { Component } from 'react';
import { connect } from 'react-redux';

import { paragraphNumber, paragraphString, clearString, createClipBoardText } from '../actions';
import returnIpsum from '../returnIpsum';


 class MainInput extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 form-group main" >
                    <span className="input-group search-span">
                        <input type="number" className="form-control" id="paragraphs" placeholder="5" onChange={(event) => this.props.paragraphNumber(event.target.value)} />
                        <button type="button" className="btn btn-primary" onClick={() => this.props.paragraphString(returnIpsum(this.props.number))} >Go!</button>
                        <button type="button" className="btn btn-danger" onClick={() => this.props.clearString()}>Clear</button>
                        <button type="button" className="btn btn-success" onClick={() => navigator.clipboard.writeText(this.props.clipText)}>Copy to Clipboard</button>
                    </span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { number: state.ipsum.number, stringList: state.ipsum.stringList, clipText: state.ipsum.clipText }
}

export default connect(mapStateToProps, { paragraphNumber, paragraphString, clearString })(MainInput);