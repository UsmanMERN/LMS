"use client"
import { Compass, Layout } from 'lucide-react'
import SidebarItems from "./sidebar-items"
const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    }
]

function SidebarRoutes() {
    const routes = guestRoutes
    return (
        <div className='flex flex-col w-full'>
            {routes.map((route) => (
                <SidebarItems
                    key={route.href}
                />)
            )}
        </div>
    )
}

export default SidebarRoutes