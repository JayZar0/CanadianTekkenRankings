import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

/**
 * This method will be used to update the database using the start.gg and challonge API data
 */
const connectionString = `${process.env.POSTGRES_CONNECTION_WORK}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

/**
 * This class will be used as an instance of the database that will store the
 * players database
 */
export class Database {

    prisma = new PrismaClient({ adapter })


    /**
     * This method will be used to connect the instance of the object to the database
     */
    async connectToDB() {
        await this.prisma.$connect()
    }

    // TODO find a way to get this to add to the postgres database
    async addData(playerData) {
        try {
            const test = await this.prisma.Player.create({
                data: {
                    startggid: '1313',
                    gamertag: 'juanZ0',
                    main: 'Xiaoyu',
                    province: 'Saskatchewan',
                    wins: 24,
                    games: 56,
                    averageRank: 10.7,
                    winRate: 42.9
                }
            })
        } catch(e) {
            console.error('error: data did not get added')
        }
    }

    /**
     * This method will be used to update the information on the database
     */
    async updateDatabase() {
        // query the api
        // grab the data from the query
        // connect to the database
        // for each mapped piece of data
        // place it into the database
    }
}

