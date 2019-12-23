import React from 'react'

const SocialMedia = () => {
     
    return (
        <>
        <div className="fixed-action-btn hoverEnabled">
            <a className="btn-floating btn-large" href="# ">
                <i className="large material-icons white-text">link</i>
            </a>

            <ul className="fab-content">
                <li>
                    <a className="btn-floating white" href="https://github.com/mallorysmith64" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>

                <li>
                    <a className="btn-floating white" href="https://www.linkedin.com/in/mallorysmith64/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
            </ul>

        </div>
    </>
    )
}

export default SocialMedia