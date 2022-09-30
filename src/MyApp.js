import React from 'react'
import Greet from './Greet'
import Intro from './Intro'
import './MyApp.css'

function MyApp() {
    let name = <h1>Saad Nisar Butt!</h1>
    let haal = <p>How are you?</p>
    let comparator = 2;
    return (
        <>
            <Greet />
            {/* <Intro /> */}
            <Intro/>
            <h1 className='head1'>{(comparator) == 2 ? "Usman" : "Saad"}</h1>
            <p>This is paragraph</p>
            {
                comparator > 10 ? 
                <p>grater than {comparator}</p> :
                comparator == 2 ?
                <p>equals to {comparator}</p> :
                <p>less than {comparator}</p>
            }
            {name}
            {haal}
        </>
    );
}

export default MyApp;
