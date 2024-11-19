import * as React from 'react'

export default function LeaderBoardList({ data }) {

    return (
        <div className="h-96 w-72">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Placement</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {data.players.map(d =>
                        <tr key={d.name}>
                            <td>{d.name}</td>
                            <td>{d.placement}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
