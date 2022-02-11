import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Dropdown, Nav, Sidenav } from 'rsuite'

export const NavSideBar = () => {
    const [activeKey, setActiveKey] = useState('1')
    const [openKeys, setOpenKeys] = useState(['3', '4'])

    return (
        <MySidenav
            activeKey={activeKey}
            openKeys={openKeys}
            onOpenChange={setOpenKeys}
            onSelect={setActiveKey}
        />
    )
}

const styles = {
    width: 240,
    display: 'inline-table',
    marginRight: 10,
    height: 900,
    backgroundColor: '#F7F7FA',
}
const MySidenav = ({ appearance, ...props }: any) => {
    const history = useHistory()
    return (
        <div style={styles}>
            <Sidenav appearance={appearance} defaultOpenKeys={['3', '4']}>
                <Sidenav.Body>
                    <Nav {...props}>
                        <Nav.Item
                            eventKey="1"
                            onClick={() => history.push('/')}
                        >
                            Dashboard
                        </Nav.Item>
                        <Nav.Item
                            eventKey="2"
                            onClick={() => history.push('/Employees')}
                        >
                            Employees
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    )
}
