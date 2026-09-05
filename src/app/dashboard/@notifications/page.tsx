import { Card } from "@/app/components/card";
import Link from "next/link";
export default function DashboardNotifications(){
    return(
        <>
        <Card>Dashboard Notifications</Card>
        <div>
            <Link href="/dashboard/archived">Archived</Link>
        </div>
        </>
    )
}