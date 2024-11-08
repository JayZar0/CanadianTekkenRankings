import * as Prisma from 'prisma'
import { PrismaClient } from '@prisma/client'
import { queryPlayers } from '@/app/apihandler/startgg'

/**
 * This method will be used to update the database using the start.gg and challonge API data
 */

/**
 * This class will be used as an instance of the database that will store the
 * players database
 */
export class Database {
    prisma = new PrismaClient()

    /**
     * This method will be used to connect the instance of the object to the database
     */
    async connectToDB() {
        await this.prisma.$connect()
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

