import React, { useEffect } from 'react'
import 'rsuite/dist/rsuite.min.css'
import { Button, DatePicker, Popover } from 'rsuite'
import { NavSideBar } from './nav/SideBar'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { TopBar } from './nav/TopBar'
import { Employees } from './screens/Employee'
const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>,
    },
    {
        path: '/Employees',
        sidebar: () => <div>Employees</div>,
        main: () => <Employees />,
    },
]

export default function App() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                }}
            >
                <NavSideBar />

                <div
                    style={{
                        flex: 1,
                        padding: '10px',
                    }}
                >
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
