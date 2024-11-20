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
    let results = []
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
        const data = await queryResponse.json()
        const tournaments = data.data.tournaments.nodes
        for (const tournament of tournaments) {
            results.push({
                tournament: tournament.name,
                players: tournament.events[0]?.entrants.nodes.map(e => {
                    return {
                        id: e.standing.player?.id,
                        name: e.name,
                        placement: e.standing.placement
                    }
                }).sort((a, b) => a.placement - b.placement)
            })
        }
    } catch(e) {
        console.error(e)
    }
    
    return results
}

/**
 * This method will be used to calculate the stats of the players
 */
export async function calculateStats() {

}