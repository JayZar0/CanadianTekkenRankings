'use server'

import {graphql, buildSchema} from 'graphql'
/**
 * This file will be used to grab the information on a player using the start.gg api
 */

/**
 * This method will be used to query the players from the database
 * the query will take:
 *  player:
 *      id
 *  tournament:
 *      id
 *  participant:
 *      id
 *      placement
 *      name
 */
export async function queryPlayers() {
    const queryResonse = await fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `bearer ${process.env.STARTGG_API_KEY}`
        },
        body: JSON.stringify({
            "query": "",
            "variables": {  }
        })
    })
}