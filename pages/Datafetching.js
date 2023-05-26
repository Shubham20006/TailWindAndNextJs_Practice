
import User from "@/components/user"
function Datafetching({ users }) {
    return (
        <div>
            list of users

            {
                users.map((users) => {
                    return (
                        <div>
                       <User users={users}/>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Datafetching

export async function getStaticProps() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json();
    console.log(data)
    return {
        props: {
            users: data,
        }
    }
}
