import React from 'react'
import { Github } from 'react-bootstrap-icons'
import github from '../assets/img//github-mark-white.svg'

const Cards = ({image, type, title, url, githubLink, text, target}) => {
  return (
    <div className='card-bx'>
        <div className='card-imgbx'>
            <a>
                <img src={image} alt='proj-img' className='proj-img' />
            </a>
        </div>
        <div className='proj-details'>
          <div className='proj-type'>{type}</div>
          <div className='proj-title'>{title}</div>
          <p className='proj-text'>{text}</p>
          <div className='proj-linkbx'>
              <a href={githubLink}target='_blank' className='proj-github'>
                <img src={github} alt='github' className='proj-github-image' />
              </a>
              <a href={url} target={target} className='proj-link'>
                <div>Visit Project</div>
              </a>
          </div>
        </div>
    </div>
  )
}

export default Cards
