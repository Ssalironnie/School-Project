import React, { Component } from 'react';
import { ButtonGroup, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from '../assets/logo.png';

import Main from '../pages/Main';
import CreateArticle from '../pages/CreateArticle';
import Registration from '../pages/Registration';
import Authorization from '../pages/Authorization';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='md'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='60'
                                width='60'
                                className='d-inline-block align-top'
                                alt='Logo'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='justify-content-end align-items-end'>
                                <Nav.Link href='/main'> Лента публикаций </Nav.Link>
                                <Nav.Link href='/createArticle'> Создать публикацию </Nav.Link>
                                <ButtonGroup>
                                    <Button className='btn btn-primary' href='/registration'> Регистрация </Button>
                                    <Button className='btn btn-primary' href='/authorization'> Вход </Button>
                                </ButtonGroup>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route exact path='/createArticle' component={CreateArticle} />
                        <Route exact path='/registration' component={Registration} />
                        <Route exact path='/authorization' component={Authorization} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Header;