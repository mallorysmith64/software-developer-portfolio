import React, { Component } from 'react'

class SocialMedia extends Component {
    
    render() {
        return (
            <>
        <div className="fixed-action-btn direction-top">
            <a className="btn-floating btn-large" href="/#">
                <i className="large material-icons white-text">link</i>
            </a>

            <ul className="fab-content">
                <li>
                    <a className="btn-floating white" href="https://github.com/mallorysmith64" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-slack orange-text text-darken-3" aria-hidden="true"></i>
                    </a>
                </li>

                <li>
                    <a className="btn-floating white" href="https://www.linkedin.com/in/mallorysmith64/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in orange-text text-darken-3"></i>
                    </a>
                </li>

            </ul>
        </div>
    </>
    )
}}

export default SocialMedia