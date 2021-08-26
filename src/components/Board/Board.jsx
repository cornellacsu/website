import React, { useState, useEffect } from "react";
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Card';
import officerJson from '../../data/officers2122.json';

function Board() {
    const [pageName, setPageName] = useState('Academic');
    const [officers, setOfficers] = useState(null);

    const setName = (name) => {
        setPageName(name)
    };

    const loadOfficerData = (json, teamName) => {
        const officers = json.officers.filter(person => {
            if (person.team === teamName) return person;
        });
        return officers;
    };

    const renderOfficers = officers => {
        const officerElts = []
        officers.forEach((elt) => {
            officerElts.push(
                <Card name={elt.name} team={elt.team} img={elt.img} />
            )
        });
        return officerElts
    };

    useEffect(() => {
        const officerData = loadOfficerData(officerJson, pageName);
        setOfficers(renderOfficers(officerData));
    });

    return (
        <div className="board">
            <div className="container">
                <Sidebar onClick={setName} />
                <div className="align-items-center my-5">
                    <div>
                        <h1 className="font-weight-light">{pageName}</h1>
                        <div className="row px-4">{officers}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;