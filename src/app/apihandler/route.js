'use server'
import * as StartggController from './startgg'
import {Database} from "@/app/apihandler/prisma";
import {NextResponse} from "next/server";

/**
 * This file will be used as a server handler which will be called on a filter
 * submission
 * @param req this is the request object that will be used in the filter creation
 * @param res this is the response object that will be used in the filter creation
 */
export async function POST(req, res) {
    try {
        const database = new Database()
        await database.addData(req)
        return NextResponse.json({data: 'data was uploaded'}, {status: 200})
    } catch (e) {
        return NextResponse.json({data: 'There was an error in the server'}, {status: 400})
    }

}