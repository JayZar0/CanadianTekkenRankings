'use client'
import * as React from 'react'

/**
 * This file is used to get a form for querying certain players
 * @inputs Player Name - The name of the players. e.g. Jvenzaro, JuanZ0, Wumbo, Fl0w, onetinypanda
 * @inputs Province - The player's province. e.g. Saskatchewan, Alberta, Ontario
 * @inputs City - The city the player is from. e.g. Saskatoon, Edmonton, Regina(yuck!), Calgary
 * @inputs Characters The characters they have played in tournament
 * @returns {JSX.Element}
 * @constructor
 */
export default function FilterForm() {
    const characters = [
        {name: 'Alisa'},
        {name: 'Asuka'},
        {name: 'Azucena'},
        {name: 'Bryan'},
        {name: 'Claudio'},
        {name: 'Devil'},
        {name: 'Dragunov'},
        {name: 'Eddy'},
        {name: 'Feng'},
        {name: 'Hwoarang'},
        {name: 'Jack-8'},
        {name: 'Jin'},
        {name: 'Jun'},
        {name: 'Kazuya'},
        {name: 'King'},
        {name: 'Kuma'},
        {name: 'Lars'},
        {name: 'Lee'},
        {name: 'Leo'},
        {name: 'Leroy'},
        {name: 'Lili'},
        {name: 'Marshall'},
        {name: 'Nina'},
        {name: 'Panda'},
        {name: 'Paul'},
        {name: 'Raven'},
        {name: 'Reina'},
        {name: 'Shaheen'},
        {name: 'Steve'},
        {name: 'Victor'},
        {name: 'Xiaoyu'},
        {name: 'Yoshimitsu'},
        {name: 'Zafina'}
    ]

    return (
        <div className="block content-center justify-center self-center p-3 mx-auto my-3 w-full h-2">
            <h1 className="m-4 font-bold">Enter details player</h1>
            <form action="">
                <div className="row-auto m-2">
                    <label htmlFor="name">Name: </label>
                    <input className='text-black' type="text" name="player-name" id="name" placeholder="JuanZ0"/>
                </div>
                <div className="row-auto m-2">
                    <label htmlFor="province">Province: </label>
                    <input className="text-black" type="text" name="province" id="province" placeholder="Saskatchewan"/>
                </div>
                <div className="row-auto m-2">
                    <label htmlFor="city">City: </label>
                    <input className="text-black" type="text" name="city" id="city" placeholder="Saskatoon" />
                </div>
                <div className="row-auto m-2">
                    <label htmlFor="character">Character: </label>
                    <select className="text-black" name="character" id="character"
                            defaultValue="--Select a character--">
                        <option value="%%">--Select a character--</option>
                        {characters.map(character =>
                            <option key={character.name} value={character.name}>{character.name}</option>
                        )}
                    </select>
                </div>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        type="submit">Search
                </button>
            </form>
        </div>
    )
}