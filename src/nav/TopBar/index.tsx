import { useState } from 'react'
import { Nav } from 'rsuite'

const styles = {
    marginBottom: 50,
}

const CustomNav = ({ active, onSelect, ...props }: any) => {
    return (
        <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
            <Nav.Item eventKey="home">Home</Nav.Item>
            <Nav.Item eventKey="news">News</Nav.Item>
            <Nav.Item eventKey="solutions">Solutions</Nav.Item>
            <Nav.Item eventKey="products">Products</Nav.Item>
            <Nav.Item eventKey="about">About</Nav.Item>
        </Nav>
    )
}

export const TopBar = () => {
    const [active, setActive] = useState('home')
    return <CustomNav active={active} onSelect={setActive} />
}
