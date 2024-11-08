import * as React from 'react'
import PropTypes from 'prop-types'

export default function LeaderBoardList(props) {

    props.data = PropTypes.array;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Average Placements</th>
                        <th>Win Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(d =>
                        <tr key={d.id}>
                            <td>{d.name}</td>
                            <td>{d.averagePlacement}</td>
                            <td>{d.winRate}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
