export const metadata={
    title:"learning Next.js",
    description:"Learning Next.js with VatsR"
}

export default function RootLayout(
    { children }: 
    { children: React.ReactNode }
) {
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
                        <a href="/" style={{ color: "white", textDecoration: "none" }}>
                            Home
                        </a>

                        <a href="/about" style={{ color: "white", textDecoration: "none" }}>
                            About
                        </a>

                        <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
                            Contact
                        </a>
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

