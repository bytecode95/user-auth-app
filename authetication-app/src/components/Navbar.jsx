import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <div style={{ backgroundColor: 'aqua', padding: '20px' }}>
                <div style={{display:'flex'}}>
                    <Link style={{ textDecoration: 'none', margin: '20px', color: 'black' }} to={'/'}>Home</Link>
                    <Link style={{ textDecoration: 'none', margin: '20px', color: 'black' }} to={'/signup'}>SignUp</Link>
                    <Link style={{ textDecoration: 'none', margin: '20px', color: 'black' }} to={'/login'}>Login</Link>
                    <Link style={{ textDecoration: 'none', margin: '20px', color: 'black' }} to={'/booking'}>Booking</Link>
                </div>
            </div>

        </>
    )
}