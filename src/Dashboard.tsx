import { User } from "./App";
import { Profile, Sidebar } from "./Components";


interface DashboardProps{
    user: User;
}

export default function Dashboard({user}: DashboardProps){
    return(
        <div>
            <Sidebar user={user}/>
            <Profile user={user}/>
        </div>
    )
}

