import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import chip1 from '../assets/img/chip-1.gif';
import chip2 from '../assets/img/chip-2.gif';
import chip3 from '../assets/img/chip-3.gif';
import chip4 from '../assets/img/chip-4.gif';
import colorSharp from '../assets/img/color-sharp.png';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
  
  return (
    <section className="skill" id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            SKILLS
                        </h2>
                        <p>My area of expertise. I enjoy the bigger picture in devlopment, while creating tasteful web applications from both sides of the spectrum.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                                <img src={chip1} alt='ui-pic'/>
                                <h5>UX/UI Development</h5>
                            </div>
                            <div className='item'>
                                <img src={chip2} alt='backend-pic' />
                                <h5>BackEnd/Data Managent</h5>
                            </div>
                            <div className='item'>
                                <img src={chip3} alt='brand-pic'/>
                                <h5>Brand Identity/Innovation</h5>
                            </div>
                            <div className='item'>
                                <img src={chip4} alt='fs-pic'/>
                                <h5>Full-Stack
                                </h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='skill-bx-2'>
                        <h2>
                            FRAMEWORKS
                        </h2>
                        <p>Within my coding journey I have tried to immerse myself with many unique languages//frameworks to understand as many elements of development as I can...This is my list, but it grows exponentially as time goes by.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src='https://www.citypng.com/public/uploads/small/11662226392uom4gsi9ddb1c81ipfx2u4imargvwq7uskhdui1pj4f6xufjz0jkfzqzduhjuifts0dzcnykgszw6isfutq2nlwb51ef4gm0dt8d.png' alt=''/>
                            </div>
                            <div className='item'>
                                <img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png' alt='' />
                            </div>
                            <div className='item'>
                                <img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' alt=''/>
                            </div>
                            <div className='item'>
                                <img src='https://i.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png' alt=''/>
                            </div>
                            <div className='item'>
                                <img src='https://symbols.getvecta.com/stencil_27/79_sql-database-generic.494ff6320e.png' alt=''/>
                            </div>
                            <div className='item'>
                                <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_502,h_518/https://keytotech.com/wp-content/uploads/2019/05/firebase.png' alt=''/>
                            </div>
                            <div className='item'>
                                <img src='https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png' alt=''/>
                        
                            </div>
                            <div className='item'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://cdn-icons-png.flaticon.com/512/919/919832.png' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024' alt=''/>
                            </div>
                            <div className='item'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?fit=500%2C500&ssl=1' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://uploads-ssl.webflow.com/60cca9384ff7eaa931a24b69/60ce44133ce5aee0e6c9cac9_Mern.png' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://delaplex.com/wp-content/uploads/2020/02/asp-net-mvc-logo-300x200.png' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://user-images.githubusercontent.com/15052701/49188349-5f5ec580-f3a5-11e8-8a75-3c5689249136.png' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://www.nicepng.com/png/full/242-2428861_pwa-progressive-web-app-logo-pwa-progressive-web.png' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://doc.octoperf.com/monitoring/create-connection/mongodb/img/mongodb-logo.png' alt=''/>
                                
                            </div>
                            <div className='item'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' alt=''/>
                              
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} alt='gradient-pic'></img>
    </section>
  )
}


