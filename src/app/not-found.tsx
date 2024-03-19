import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1>Page Not Found</h1>
            <h3 style={{ marginTop: '20px' }}>Go back to <Link href="/" style={{ textDecoration: 'none' }}>home</Link></h3>
        </div>
    );
}
