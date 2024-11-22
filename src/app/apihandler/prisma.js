import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { queryPlayers } from "@/app/apihandler/startgg";

/**
 * This method will be used to update the database using the start.gg and challonge API data
 */
const connectionString = `${process.env.POSTGRES_CONNECTION_HOME}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

/**
 * This class will be used as an instance of the database that will store the
 * players database
 */
export class Database {

    prisma = new PrismaClient({ adapter })

    /**
     * This method will be used to send data to the database
     * @param data This is the data that was queried from the startgg api
     * @returns {Promise<void>}
     */
    async addData(data) {
        try {
            // add all the players to the table
            const players = await this.prisma.Player.createMany({
                data: [ data.players ]
            })

            // add the tournament to the table
            const tournaments = await this.prisma.Tournament.create({
                data: {
                    tournamentId: data.id,
                    name: data.tournament
                }
            })
            console.log(players)
            console.log(tournaments)

            // disconnect the database
            this.prisma.$disconnect()
        } catch(e) {
            console.error('error: data did not get added', e.message)
        }
    }

    /**
     * This method will be used to query the database and print the data based
     * on the params provided
     * @param params This is the search param object
     * @returns {Promise<json>}
     */
    async getPlayerData(params) {
        const results = await this.prisma.Player.findMany({
            where: {
                params
            }
        })

        return results.json()
    }

    /**
     * This method will be used to update the information on the database
     */
    async updateDatabase() {
        // query the api
        // grab the data from the query
        const data = await queryPlayers()

        // for each mapped piece of data
        // place it into the database
        for (const d of data) {
            await this.addData(d)
        }
    }
}

