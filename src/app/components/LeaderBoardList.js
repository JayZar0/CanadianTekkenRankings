import * as React from 'react'
import PropTypes from "prop-types";

export default function LeaderBoardList(props) {

    props.postgres = PropTypes.array;

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
                    {props.postgres.map(data =>
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.averagePlacement}</td>
                            <td>{data.winRate}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
