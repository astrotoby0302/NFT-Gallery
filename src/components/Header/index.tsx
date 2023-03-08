import {
    Navbar,
    Container,
    Nav,
    Button
} from 'react-bootstrap';
import './style.scss';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img src='https://www.alturanft.com/logo-svg.svg' alt='' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#">NFT Gallery</Nav.Link>
                </Nav>
                <Button className='btn-metamask'>Connect Wallet</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;