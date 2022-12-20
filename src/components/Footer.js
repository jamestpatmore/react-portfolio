import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from '../assets/img/abstract.gif';
import github from '../assets/img/github-icon.png';
import linkedIn from '../assets/img/linkedin-icon.png';
import insta from '../assets/img/instagram-icon.png';

export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className="align-items-center">
                <MailchimpForm />
                <Col sm={6}>
                    <img src={logo} alt='logo'/>
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                        <a href='https://github.com/jamestpatmore'><img src={github} alt='github-link'/></a>
                        <a href='https://github.com/jamestpatmore'><img src={linkedIn} alt='linkedin-link'/></a>
                        <a href='https://github.com/jamestpatmore'><img src={insta} alt='instagram-link'/></a>
                    </div>
                    <p>Copyright 2022. All rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

