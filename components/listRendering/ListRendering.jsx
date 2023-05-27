import React from 'react'
import PersonList from './PersonList'
function ListRendering() {
    const persons = [
        {
            id: 1,
            name: "Shubham",
            age: 22,
            skill: "React"
        }, {
            id: 2,
            name: "Raj",
            age: 25,
            skill: "Angular"
        }, {
            id: 3,
            name: "Akash",
            age: 24,
            skill: "Java"
        }]

    // const Personlist = persons.map(person => <h2>I am {person.name},i am {person.age} years old and i know {person.skill}</h2>)
    const Personlist = persons.map(person => <PersonList person={person} />)
    return (
        <div>
            {Personlist}
        </div>
    )
}

export default ListRendering
