import {Navigate, Outlet} from 'react-router-dom'

export default function PrivateRoutes(){
    const auth = localStorage.getItem('token');
    return (
        <>
            auth ? <Outlet/> : <Navigate to={'login'}/>
        </>
    )
}