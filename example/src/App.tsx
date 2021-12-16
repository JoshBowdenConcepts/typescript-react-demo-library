import React from 'react'
import { Button, SayHello } from 'typescript-react-test/lib/esm'
import './App.css'

function App() {
    return (
        <div className="App">
            <SayHello name="Prateek" />
            <Button text={'test'} />
        </div>
    )
}

export default App
