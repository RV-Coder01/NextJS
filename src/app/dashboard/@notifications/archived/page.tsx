import { Card } from "@/app/components/card";
import Link from "next/link";
export default function DashboardNotificationsArchived(){
    return(
        <>
        <Card>Dashboard Notifications Archived</Card>
        <div>
            <Link href="/dashboard">Default</Link>
        </div>
        </>
    )
}