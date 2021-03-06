import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import _ from 'lodash'

import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../redux/user'

import Home from './home'
import { Login, Register, Schedule, Monitor, Test} from './auth'

import { Navbar as BSNavbar, Nav } from 'react-bootstrap'

//this is what creates the app in full. It creates the navbar, which connects all the pages together then creates the app itself which has all the routes to all the pages.

function NavbarLink(props) {
    return (
        <li className="nav-item">
            <Link to={props.to} className="nav-link" onClick={props.onClick}>
                {props.children || ''}
            </Link>
        </li>
    )
}

function Navbar(props) {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    return (
        <BSNavbar expand="lg" {...props}>
            <Link to="/" className="navbar-brand">
                RxMinder
            </Link>
            <BSNavbar.Toggle aria-controls="navbar-nav" />

            <BSNavbar.Collapse id="navbar-nav">
                {_.isEmpty(user) === true ? (
                    <>
                        <Nav className="mr-auto">
                            <NavbarLink to="/schedule">Schedule</NavbarLink>
                            <NavbarLink to="/monitor">Monitor</NavbarLink>
                            <NavbarLink to="/test">Test</NavbarLink>
                            <NavbarLink to={{ pathname: '/', hash: 'about' }}>
                                About
                            </NavbarLink>
                        </Nav>
                        <Nav>
                            <NavbarLink to="/login">Login</NavbarLink>
                        </Nav>
                    </>
                ) : (
                    <>
                        <Nav className="mr-auto">
                            <NavbarLink to="/">Dashboard</NavbarLink>
                            <NavbarLink to="/test">Test</NavbarLink>
                            <NavbarLink to="/profile">Profile</NavbarLink>
                        </Nav>
                        <Nav>
                            <NavbarLink
                                to="/"
                                onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(logout())
                                }}
                            >
                                Logout, {user.name}
                            </NavbarLink>
                        </Nav>
                    </>
                )}
            </BSNavbar.Collapse>
        </BSNavbar>
    )
}

function App() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(login({}))
    }, [])

    return (
        <Router>
            {_.isEmpty(user) === true ? (
                <Switch>
                    <Route exact path="/login">
                        <Navbar fixed="top" />
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Navbar fixed="top" />
                        <Register />
                    </Route>
                    <Route exact path="/test">
                        <Navbar />
                        <Test />
                    </Route>
                    <Route exact path="/monitor">
                        <Navbar />
                        <Monitor />
                    </Route>
                    <Route exact path="/schedule">
                        <Navbar />
                        <Schedule />
                    </Route>
                    <Route exact path="/">
                        <Navbar className="primary" />
                        <Home />
                    </Route>
                </Switch>
            ) : (
                <>
                    <Navbar className="primary" />
                    <Switch>
                        <Route exact path="/test">
                            <Navbar />
                            <Test />
                        </Route>
                    </Switch>
                </>
            )}
        </Router>
    )
}

export default App
