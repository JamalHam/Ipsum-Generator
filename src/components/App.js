import React, { Component } from 'react'
import Header from './Header';
import HiddenInput from './HiddenInput';
import MainInput from './MainInput'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainInput />
                <HiddenInput />
            </div>
        )
    }
}

export default App;