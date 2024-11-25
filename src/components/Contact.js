import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"
import emailjs from '@emailjs/browser';


emailjs.init("o3mWPjzvYVkCJ8j-s");


export default function Contact({ setAlert, alert }){
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    console.log(alert)

    const [formData, setformData] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})
    const [loading, setLoading] = useState(false)

    const updateForm = (category, value) => {
        setformData({
            ...formData,
            [category]: value
        })
    }

    const clearForm = () => {
        setformData(formInitialDetails)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        setButtonText('Sending...')

        try{
            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                phone_number: formData.phone,
                message: formData.message,
                to_name: 'JentleJoe',
                reply_to: formData.email
            }

            const response = await emailjs.send(
                'service_267uuph',
                'template_sq32r15',
                templateParams
            );

            if (response.status === 200) {
                setStatus({
                    success: true,
                    message: "Message sent successfully!"
                });
                setAlert(`Message sent successfully!`, 'green')
                clearForm();
            }
        } catch (error) {
            console.error('Email error:', error);
            setStatus({
                success: false,
                message: "Something went wrong. Please try again later."
            });
            setAlert(`Something went wrong. Please try again later`, 'red')
        } finally {
            setLoading(false);
            setButtonText('Send');
        }        
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
                                    <input type="text" required value={formData.firstName} placeholder="First Name"
                                    onChange={(e) => {updateForm('firstName', e.target.value)}} />
                                </Col>
                                <Col sm={6} className="px-1" >
                                    <input type="text" required value={formData.lastName} placeholder="Last Name"
                                    onChange={(e) => {updateForm('lastName', e.target.value)}} />
                                </Col>
                                <Col sm={6} className="px-1" >
                                    <input type="email" required value={formData.email} placeholder="Email Address"
                                    onChange={(e) => {updateForm('email', e.target.value)}} />
                                </Col>
                                <Col sm={6} className="px-1" >
                                    <input type="tel" required value={formData.phone} placeholder="Phone No."
                                    onChange={(e) => {updateForm('phone', e.target.value)}} />
                                </Col>
                                <Col>
                                    <textarea rows="6" required value={formData.message} placeholder="Message"
                                    onChange={(e) => {updateForm('message', e.target.value)}} />
                                    <button className="form-btn"
                                    type="submit"
                                    disabled={loading}>
                                        <span>{buttonText}</span>
                                    </button>
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