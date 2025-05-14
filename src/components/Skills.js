import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'
import { skills } from "./Text";


export default function Skills(){

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

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2 className="heading-text">Skills</h2>
                            <p>
                                {skills}
                            </p>
                            <div className="skill-list">
                                <div>
                                    TypeScript<br />
                                    React.js<br />
                                    Next.js<br />
                                    Git
                                </div>
                                <div>
                                    Node.js<br />
                                    Mongo DB<br />
                                    Express.js<br />
                                    Supabase
                                </div>
                                <div>
                                    JavaScript<br />
                                    Tailwind Css<br />
                                    Html / Css<br />
                                    Angular.js
                                </div>
                                <div>
                                    Version Control<br />
                                    Python<br />
                                    APIs<br />
                                    C<br />
                                </div>
                            </div>
                            <Carousel responsive={responsive} infinite={true}
                             autoPlay={true} autoPlaySpeed={2000} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Responsive Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Next.js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>UI/UX Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Backend Functionality</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="image" />
        </section>
    )

}
