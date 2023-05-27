import React from 'react'
import ContextB from './ContextB';

export const usercontext = React.createContext();
export const citycontext = React.createContext();

function ContextA() {
    return (
        <div>
            <usercontext.Provider value={"Shubham"}>
                <citycontext.Provider value={"Pune"}>
                    <ContextB />
                </citycontext.Provider>

            </usercontext.Provider>
        </div>
    )
}

export default ContextA
