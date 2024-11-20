'use client'

import * as React from 'react'
import LeaderBoardList from '@/app/components/LeaderBoardList'

export default function Home() {
    const [output, setOutput] = React.useState('')
    const [error, setError] = React.useState('')

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
            setOutput(result.data[2])
        }
    }

    return (
        <div className='grid h-screen bg-red-500 align-middle items-center justify-items-center p-8 sm:min-h-screen gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <div className='flex flex-wrap'>
                <div className='flex-1 grid-cols-2'>
                    <LeaderBoardList data={output} />
                </div>
                <div className='grid grid-cols-3'>
                    <button type="button" className='bg-gray-500 hover:bg-gray-700 h-10 text-white font-bold m-2 py-2 px-4 rounded'
                            onClick={ handleButton }>Test data</button>
                    {error && <div className="text-red-500">{error}</div>}
                </div>
            </div>
        </div>
    );
}
