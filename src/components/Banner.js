import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'

export default function Banner(){

    const toRotate = ['A Web Developer', 'an App Developer', 'A Software Engineer']

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    // const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(50);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        // setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        // setIndex(1);
        setDelta(300);
        }
        //  else {
        // setIndex(prevIndex => prevIndex + 1);
        // }
    }

    return(
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline" >Welcome to my Portfolio</span>
                        <h1>{ 'Hi I\'m JentleJoe, ' }<span className="wrap"> {text} </span> </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tellus at eros fringilla iaculis ac et neque. Proin vitae scelerisque nulla, quis congue enim. Vestibulum metus neque, porta quis placerat eu, luctus vel orci. Nulla quis viverra lorem, a elementum urna. Vestibulum bibendum, neque quis luctus posuere, sem mi auctor felis, at pellentesque libero tortor sed tellus. Nulla facilisi. Integer eu turpis aliquam, hendrerit mauris a, fringilla magna. Phasellus bibendum lacus eget ligula interdum tristique. Curabitur ornare massa pharetra nunc volutpat tincidunt.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}