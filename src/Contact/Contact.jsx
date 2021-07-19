import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import PhoneInTalkSharpIcon from '@material-ui/icons/PhoneInTalkSharp';

import './Contact.css'

export default function Contact() {
    return (
        <div className="fontstyle">
            <h2 className="contact">Contact Me</h2>

            <div className="mailIcon">
                <EmailSharpIcon style={{color: '#faebd7'}} fontSize="large"/>
                <p className="email">preston.thomas355@gmail.com</p>
                <PhoneInTalkSharpIcon style={{color: '#faebd7'}} fontSize="large"/>
                <p className="number">(816)-853-6415</p>
                <img src="LI-In-Bug.png" width="35" height="35" alt="LinkedIn Logo" />
                <a className="linkedIn" href="https://www.linkedin.com/in/preston-thomas-13041a213/">Connect on LinkedIn</a>
            </div>
        </div>
    )
};