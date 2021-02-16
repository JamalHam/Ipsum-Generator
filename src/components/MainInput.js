import React, { Component } from 'react'

 class MainInput extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-12 form-group main" >
                    <span className="input-group search-span">
                        <input type="number" className="form-control" id="paragraphs" placeholder="5" />
                        <button type="button" className="btn btn-primary">Go!</button>
                        <button type="button" className="btn btn-danger">Clear</button>
                        <button type="button" className="btn btn-success">Copy to Clipboard</button>
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

export default MainInput;