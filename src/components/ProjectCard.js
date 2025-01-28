import { Col } from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons'


export default function ProjectCard({title, description, imgUrl, projUrl, redirect, inProgress}){

    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img className="proj-img" src={imgUrl} alt="image" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    {
                    redirect && <a href={projUrl} target="_blank">
                        <br /><br />
                        <button className="proj-btn"> View Site <ArrowRightCircle size={25} /></button>
                    </a>
                    }
                    {
                    title === "Portfolio Page" && <a href={projUrl}>
                        <br /><br />
                        <button className="proj-btn"> View Site <ArrowRightCircle size={25} /></button>
                    </a>
                    }
                    {
                    inProgress && <p className="proj-progress">STILL UNDER BUILD</p>
                    }
                </div>
            </div>
        </Col>
    )
}