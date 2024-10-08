import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"


export default function Contact(){
    const formInitialDetails = {
        firstName: '',
        lastNme: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    // Form Dummy text state management
    // const [showText, setShowText] = useState(false)

    // const handleShowText = () => {
    //     setShowText((prev) => !prev)
    // }

    const updateForm = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setButtonText("Sending...");
        // let response = await fetch("http://localhost:5000/contact", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json;charset=utf-8",
        //     },
        //     body: JSON.stringify(formDetails),
        // });
        // setButtonText("Send");
        // let result = await response.json();
        // setFormDetails(formInitialDetails);
        // if (result.code == 200) {
        //     setStatus({ succes: true, message: 'Message sent successfully'});
        // } else {
        //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        // }

        // remove after setting up email functionality
        // handleShowText();
      };

    return(
        <section className="contact" id="connect" >
            <Container>
                <Row className="align-items-center" >
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2 className="heading-text">Get In Touch</h2>
                        <form onSubmit={handleSubmit} >
                            <Row>
                                <Col sm={6} className="px-1" >
                                    <input type="text" value={formDetails.firstName} placeholder="First Name"
                                    onChange={(e) => {updateForm('firstName', e.target.value)}} />
                                </Col>
                                <Col sm={6} className="px-1" >
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name"
                                    onChange={(e) => {updateForm('lastName', e.target.value)}} />
                                </Col>
                                <Col sm={6} className="px-1" >
                                    <input type="email" value={formDetails.email} placeholder="Email Address"
                                    onChange={(e) => {updateForm('email', e.target.value)}} />
                                </Col>
                                <Col sm={6} className="px-1" >
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No."
                                    onChange={(e) => {updateForm('phone', e.target.value)}} />
                                </Col>
                                <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder="Message"
                                    onChange={(e) => {updateForm('message', e.target.value)}} />
                                    <button className="form-btn" type="submit"
                                    onClick={() => window.location.href = 'mailto:your_email@example.com'} ><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}