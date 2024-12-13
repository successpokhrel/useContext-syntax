import { useContext } from "react"
import { DashboardContext } from "./context"

interface SidebarProps{}

export function Sidebar({}: SidebarProps){

    const user = useContext(DashboardContext);

    return(
        <div>
            <div>{user?.name}</div>
            <div>Subscription Status: {user?.isSubscribed?"True":"False"}</div>
        </div>
    )
}

interface ProfileProps {}

export function Profile({}: ProfileProps){
    const user = useContext(DashboardContext);
    return (
        <div>{user?.name}</div>
    )
}