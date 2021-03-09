import React, { Component } from 'react'
import Header from './Header';
import HiddenInput from './HiddenInput';
import MainInput from './MainInput';
import RenderedParagraph from './RenderedParagraph';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainInput />
                <RenderedParagraph />
                <HiddenInput />
            </div>
        )
    }
}

export default App;