import React, { useState, useEffect } from "react";
import Sidebar from '../Sidebar/Sidebar';
import Card from '../Card/Card';
import officerJson from '../../data/officers2122.json';

function Board() {
    const [pageName, setPageName] = useState('Eboard');
    const [officers, setOfficers] = useState([]);

    const setName = (name) => {
        setPageName(name)
    };

    const elts = [
        {
            name: "Eboard",
            onClick: setName,
            param: "Eboard"
        },
        {
            name: "Academic",
            onClick: setName,
            param: "Academic"
        },
        {
            name: "Corporate",
            onClick: setName,
            param: "Corporate"
        },
        {
            name: "Graphic Design",
            onClick: setName,
            param: "Graphic Design"
        },
        {
            name: "Social",
            onClick: setName,
            param: "Social"
        },
        {
            name: "Web Dev",
            onClick: setName,
            param: "Web Dev"
        },
        {
            name: "Publicity",
            onClick: setName,
            param: "Publicity"
        }
    ]

    const loadOfficerData = (json, teamName) => {
        const officers = json.officers.filter(person => {
            return person ? person.team === teamName : null;
        });
        return officers;
    };

    const renderOfficers = officers => {
        const officerElts = []
        officers.forEach((elt) => {
            officerElts.push(
                <Card name={elt.name} team={elt.team} img={elt.img} email={elt.email} eboard={elt.eboard} />
            )
        });
        return officerElts
    };

    useEffect(() => {
        const officerData = loadOfficerData(officerJson, pageName);
        setOfficers(renderOfficers(officerData));
    }, [pageName]);

    return (
        <div className="board">
            <div className="container">
                <Sidebar elts={elts} onClick={setName} />
                <div>
                    <h1 className="font-weight-light">{pageName}</h1>
                    <div className="officers row px-4">{officers}</div>
                </div>
            </div>
        </div>
    );
}

export default Board;
