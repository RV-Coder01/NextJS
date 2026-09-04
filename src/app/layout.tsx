"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/products" },
    { name: "Counter", path: "/counter" }
]

export default function RootLayout(
    { children }:
        { children: React.ReactNode }
) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>

                <header
                    style={{
                        backgroundColor: "#1e293b",
                        color: "white",
                        padding: "20px 40px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h1 style={{ margin: 0 }}>My Website</h1>

                    <nav style={{ display: "flex", gap: "20px" }}>
                        {navLinks.map((links) => {
                            const isActive = pathname === links.path || (links.path !== "/" && pathname.startsWith(links.path));
                            return (
                                <Link key={links.name} href={links.path} style={{ color: isActive ? "red" : "white", textDecoration: isActive ? "underline" : "none" }}>
                                    {links.name}
                                </Link>
                        )}
                        )}
                    </nav>
                </header>

                <main style={{ minHeight: "70vh", padding: "40px" }}>
                    {children}
                </main>

                <footer
                    style={{
                        backgroundColor: "#f1f5f9",
                        color: "#475569",
                        padding: "20px",
                        textAlign: "center",
                        borderTop: "1px solid #e2e8f0",
                    }}
                >
                    <p style={{ margin: 0 }}>
                        © 2026 My Website. All rights reserved.
                    </p>
                </footer>

            </body>
        </html>
    );
}

