import React, { Component } from 'react'
// import Resume from './resume/MalloryASmith_Resume.pdf'

class SocialMedia extends Component {
    
    render() {
        return (
            <>
        <div className="fixed-action-btn direction-top">
            <a className="btn-floating btn-large orange darken-3" href="/#">
                <i className="large material-icons white-text">link</i>

            <ul class="fab-content">
                <li>
                    <a className="btn-floating white" href="https://github.com/mallorysmith64" target="_blank">
                        <i className="fab fa-slack orange-text text-darken-3" aria-hidden="true"></i>
                    </a>
                </li>

                <li>
                    <a className="btn-floating white" href="https://www.linkedin.com/in/mallorysmith64/" target="_blank">
                        <i className="fab fa-linkedin-in orange-text text-darken-3"></i>
                    </a>
                </li>

            </ul>
            </a>
        </div>
    </>
    )
}}

export default SocialMedia