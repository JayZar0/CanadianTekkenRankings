'use client'

import * as React from 'react'
import FilterForm from '@/app/components/FilterForm'
import LeaderBoardList from '@/app/components/LeaderBoardList'
import { Modal } from '@mui/material'

export default function Home() {
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState('')
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    async function handleButton() {
        setError('')
        const response = await fetch('/apihandler', {
            method: 'POST'
        })
        if (!response.ok) {
            setError('There was an error with the server')
        } else {
            console.log(response.data)
        }
    }

    return (
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <div className='flex flex-wrap'>
                <div className='m-4 flex-none'>
                    <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                            onClick={handleOpen}>Filter Players</button>
                    <Modal open={open} onClose={handleClose}>
                        <FilterForm/>
                    </Modal>
                </div>
                <div className='m-4 flex-1'>
                    <h1 className='font-bold'>Canada Tekken 8 Leaderboard</h1>
                    {/*<LeaderBoardList data={} />*/}
                </div>
                <div>
                    <button onClick={handleButton}>Add Data</button><br/>
                    <span className='stroke-red-600 accent-red-600 font-bold'>{error}</span>
                </div>
            </div>
        </div>
    );
}
