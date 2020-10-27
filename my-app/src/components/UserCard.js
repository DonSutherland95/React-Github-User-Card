import React from 'react'

export default function UserCard(props) {
    return (
        <div className="card">
            <img src={props.userData.avatar_url} />
                <div className="card-info">
                    <h3>{props.userData.login}</h3>
                    <p>{props.userData.location}</p>
                    <p>Followers: {props.userData.followers}</p>
                    <p>Following: {props.userData.following}</p>
                    <p>{props.userData.bio}</p>
                </div>
        </div>
    )
}
