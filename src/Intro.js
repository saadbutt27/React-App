import React from 'react'

function Intro(props) {
    return (
        <>
            <p>
            My name is {props.name} and I'm a Web Developer.
            </p>
            <div>
                Name: {props.name}
                <br/>
                Dept: {props.dept}
                <br/>
                Age: {props.age}
            </div>
        </>
    )
}

Intro.defaultProps = {
    name: "Saad",
    dept: "CS",
    age: 20
}

export default Intro;