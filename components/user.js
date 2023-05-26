

function User({ users }) {
    return (
        <div>
            <p>{users.name}</p>
            <p>{users.email}</p>
            <p>========================</p>
        </div>
    )
}

export default User
