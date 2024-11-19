'use client'

import * as React from 'react'
import FilterForm from '@/app/components/FilterForm'
import LeaderBoardList from '@/app/components/LeaderBoardList'
import { Modal } from '@mui/material'

export default function Home() {
    const [open, setOpen] = React.useState(false)
    const [output, setOutput] = React.useState('')
    const [error, setError] = React.useState('')
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    async function handleButton() {
        setError('')
        setOutput('')
        const response = await fetch('/apihandler', {
            method: 'POST'
        })
        const result = await response.json()
        if (!response.ok) {
            setError('There was an error with the server')
        } else {
            setOutput(result.data[1])
        }
    }

    return (
        <div className='grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <div className='flex flex-wrap grid-rows-1'>
                <div className='m-4 flex-none grid-cols-1'>
                    <button type="button" className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                            onClick={handleOpen}>Filter Players</button>
                    <Modal open={open} onClose={handleClose}>
                        <FilterForm/>
                    </Modal>
                </div>
                <div className='m-4 flex-1 grid-cols-2'>
                    <h1 className='font-bold'>Canada Tekken 8 Leaderboard</h1>
                    {output && <LeaderBoardList data={output} />}
                </div>
                <div className='grid grid-cols-3'>
                    <button type="button" onClick={ handleButton }>Test data</button>
                    {error}
                </div>
            </div>
        </div>
    );
}
