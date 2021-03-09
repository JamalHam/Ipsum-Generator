import React, { Component } from 'react';
import { paragraphNumber, paragraphString } from '../actions'
import { connect } from 'react-redux';
import Paragraph from './Paragraph';

class RenderedParagraph extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="dawgPen">
                    <div className="col-md-12">
                        {this.props.stringList.map((item, i) => <Paragraph key={i} paragraph={item} />)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return { number: state.ipsum.number, stringList: state.ipsum.stringList }
}

//export default connect(mapStateToProps, { paragraphNumber, paragraphString})(MainInput);
export default connect(mapStateToProps, {paragraphNumber, paragraphString})(RenderedParagraph);