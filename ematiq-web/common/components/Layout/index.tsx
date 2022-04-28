import React,{ ReactNode } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from '../Footer'

interface IProps {
    children: ReactNode
}

export default function index({children}:IProps){

    const mode = 'dark';
    const subtitle= 'Get in touch';
    const email = 'info@ematiq.com';
    const whatWeDoTitle = 'What We Do';
    const whatWeDoMenu = [
        {item: 'Algorithmic trading', link: '/algorithmictrading'},
        {item: 'Sports & esport analysis', link: '/sportsanalysis'},
        {item: 'Trading technologies', link: '/tradingtechnologies'},
    ];

    const whoWeAreTitle = 'Who We are';
    const whoWeAreMenu = [
        {item: 'About us', link: '/aboutus'},
        {item: 'Contact', link: '/contact'},
        {item: 'Career', link: '/career'},
    ];

    const footerMenu = [{item:'© 2022 Ematiq Group ',link:'/'}, {item:'Privacy Policy', link:'/policy'}, {item:'Terms of Use', link: '/terms'}]


    return(
        <Container fluid={true}>
        <Row>
            <Col>
            {children}
            </Col>
        </Row>

        <Row>
            <Footer
                mode={mode}
                subtitle={subtitle}
                whatWeDoTitle={whatWeDoTitle}
                whatWeDoMenu={whatWeDoMenu}
                whoWeAreTitle={whoWeAreTitle}
                whoWeAreMenu={whoWeAreMenu}
                email={email}
                footerMenu={footerMenu} 
            />
        </Row>
         </Container>
    )
}