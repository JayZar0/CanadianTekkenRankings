'use server'

import 'dotenv/config'

/**
 * This file will be used to grab the information on a player using the start.gg api
 */

const queryString = `query TournamentFilter($cCode: String!, $prov: String!, $perPage: Int!) {
                tournaments(query: {
                    perPage: $perPage
                    filter: {
                    addrState: $prov
                    countryCode: $cCode
                    venueName: "Travelodge Hotel"
                    }
                }){
                    nodes {
                    id
                    name
                    countryCode
                    addrState
                    city
                    events(limit: 10, filter: {
                        videogameId: [49783]
                    }) {
                        id
                        name
                        videogame {
                        id
                        }
                        entrants(query:{
                        perPage: 25
                        sortBy: "placement"
                        }) {
                        nodes {
                            name
                            standing {
                            placement
                            player {
                                id
                            }
                            }
                        }
                        }
                    }
                    }
                }
            }`

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
    let data
    try {
        const queryResponse = await fetch('https://api.start.gg/gql/alpha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.STARTGG_API_KEY}`
            },
            body: JSON.stringify({
                "query": queryString,
                "variables": {
                    "cCode": "CA",
                    "prov": "SK",
                    "perPage": 10
                }
            })
        })
        data = await queryResponse.json()
        console.log(data)
    } catch(e) {
        console.error(e)
    }
    
    return data
}