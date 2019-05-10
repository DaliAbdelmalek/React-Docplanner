import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <section>
            <div className="footer">
                We are leaders in 10 countries: Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Colombia, Brazil,
                Argentina and Chile
                <br/>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify
                the conditions for storing or accessing cookies on your browser.
                <br/>www.docplanner.com © 2019
            </div>
        </section>

        </div> );
    }
}
 
export default Footer;