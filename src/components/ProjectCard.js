import { Col } from "react-bootstrap";


export default function ProjectCard({title, description, imgUrl, projUrl}){

    return(
        // CREATE A NEW CARD COMPONENT AND ADD THE RESPECTIVE STYLES
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img className="proj-img" src={imgUrl} alt="image" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}