import React from "react";
import './contact.css';
import phone from '../Assets/phone.svg';
import mail from '../Assets/mail.svg';
import github from '../Assets/github.svg';

const Contact = () => {
    return ( 
        <React.Fragment>
            <h2 id="contact">Contacts</h2>
            <div className="contact">
                <div>
                    <img src={phone} alt=""/>
                    <p>Téléphone : +221 77 856 73 76</p>
                    </div>
                <div>
                    <img src={mail} alt=""/>
                    <p>Email : <a href="mailto:mathiammbow99gmail.com">mathiammbow99@gmail.com</a></p>
                </div>
                <div>
                    <img src={github} alt=""/>
                    <p>Github : <a href="https://github.com/mathiam99">Click here</a></p>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Contact;
