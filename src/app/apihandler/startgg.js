'use server'

import 'dotenv/config'

/**
 * This file will be used to grab the information on a player using the start.gg api
 */

const queryResults = []

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
                            sets(perPage: 50) {
                              nodes {
                                winnerId
                              }
                            }
                            entrants(query:{
                                perPage: 25
                                sortBy: "placement"
                            }) {
                                nodes {
                                    id
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
            queryResults.push({
                tournament: tournament.name,
                players: tournament.events[0]?.entrants.nodes.map(e => {
                    return {
                        id: e.standing.player?.id,
                        entrantID: e.id,
                        name: e.name,
                        wins: tournament.events[0].sets?.nodes.map(s => {
                            return s.winnerId
                        }).filter(s => s === e.id).length,
                        placement: e.standing.placement,
                        points: (() => {
                            let points
                            switch(e.standing.placement) {
                                case 1:
                                    points = 20
                                    break
                                case 2:
                                    points = 15
                                    break
                                case 3:
                                    points = 13
                                    break
                                case 4:
                                    points = 12
                                    break
                                case 5:
                                    points = 10
                                    break
                                case 6:
                                case 7:
                                    points = 7
                                    break
                                case 8:
                                case 9:
                                    points = 5
                                    break
                                default:
                                    points = 0
                                    break
                            }
                            const winPoints = tournament.events[0].sets?.nodes.map(s => {
                                    return s.winnerId
                            }).filter(s => s === e.id).length

                            points += winPoints

                            return points
                        })()
                    }
                }).sort((a, b) => a.placement - b.placement)
            })
        }
        return queryResults
    } catch(e) {
        console.error(e)
    }
}
