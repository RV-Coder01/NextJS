export default function DashboardLayout(
    { children,
        users,
        notifications,
        analytics,
        login }: {
            children: React.ReactNode,
            users: React.ReactNode,
            notifications: React.ReactNode,
            analytics: React.ReactNode,
            login: React.ReactNode
        }
    
) {
    const isLoggedIn=true; // Replace with your actual login logic
    return (
        isLoggedIn ?
       ( <>
            <div>{children}</div>
            <div>{users}</div>
            <div>{notifications}</div>
            <div>{analytics}</div>
        </>) : <>{login}</>
    )
}