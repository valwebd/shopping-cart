import React from 'react';
import {
  Badge,
  Container,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
} from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to='#!'>Shopping cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl
            style={{ width: 500 }}
            placeholder='start searching'
            className='m-auto'
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <DropdownToggle variant='success'>
              <FaShoppingCart color='white' fontSize='25px' />
              <Badge>{5}</Badge>
            </DropdownToggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart Is Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
