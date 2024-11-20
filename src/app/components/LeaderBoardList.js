import * as React from 'react'
import FilterForm from "@/app/components/FilterForm";

export default function LeaderBoardList({ data }) {

    return (
        <div className="grid w-full">
            <div className="flex flex-wrap grid-rows-1">
                <div className="m-4 flex-none grid-cols-1">
                    <FilterForm />
                </div>
                <div className="m-4 flex-1 grid-cols-2">
                    <h1 className='font-bold'>Canada Tekken 8 Leaderboard</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Placement</th>
                            <th>Wins</th>
                            <th>Points</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                        {data && data.players.map(d =>
                            <tr key={d.name}>
                                <td>{d.name}</td>
                                <td>{d.placement}</td>
                                <td>{d.wins}</td>
                                <td>{d.points}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
