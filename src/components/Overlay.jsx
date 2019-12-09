import React, { Component } from 'react';
import BrandImage from './images/develop_or_go_home.jpeg'

class Overlay extends Component {
    render() {
        return (
            <>
            <img
              src={BrandImage}
              alt="develop or go home background"
              height="520"
              width="1265"
            />
            </>
        )
    }
}

export default Overlay