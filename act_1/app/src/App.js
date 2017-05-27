import React from 'react';
import ReactDOM from 'react-dom';
import Players from './components/players';


let players = [
	{id: 1, name: "playername1", img: "http://www.secsanluis.com.ar/tallerReact/oro.png"},
	{id: 2, name: "playername2", img: "http://www.secsanluis.com.ar/tallerReact/plata.png"},
	{id: 3, name: "playername3", img: "http://www.secsanluis.com.ar/tallerReact/bronce.png"},
	{id: 4, name: "playername4", img: "http://www.secsanluis.com.ar/tallerReact/oro.png"}
]

ReactDOM.render(<Players players={players}/>, document.getElementById("root"))
