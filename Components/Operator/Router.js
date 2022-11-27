import { HashRouter as Router, BrouserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Home from '../Screens/Home';
import Logins from '../Screens/Login';

const AppRouter = ()=> {
    const [isLoggedIn, setIsLoggedIn ] = useState(false);
    return(
        <Router>
            <Routes>
                {isLoggedIn ? 
                    <><Route path="/" element={<Home/>}></Route></> : <Route path="/" element={<Logins/>}><Logins/></Route>}
            </Routes>
        </Router>
    )
}

export default AppRouter;