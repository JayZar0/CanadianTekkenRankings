import * as React from 'react'

export default function LeaderBoardList(props) {
    return (
        <div>
            <ol>
                {props.map(data => <li key={data.id}>{data}</li>)}
            </ol>
        </div>
    )
}
