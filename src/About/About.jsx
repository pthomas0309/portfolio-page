import './About.css'
export default function About() {
    return (
        <div className="fontstyle">
            <h2 className="welcome">Hello, Friend.</h2>

            <h3>I'm Preston, a prospective Web Developer</h3>

            <div className="aboutMe">
                <div className="imageBorder">
                    <img className="adminImage" src="me.jpeg" alt="Preston and his cat Bebop" width="500" height="500"/>
                </div>
                <div className="aboutBlurb">
                    <h4>About Me</h4>
                    <p>I am a lover of art, movies, music, and theatre. My interest in technology began when I learned how it lives at the heart of all of the things I enjoy the most. I began learning HTML and CSS in highshcool, and my knowledge truly flourished during my time at Prime Digital Academy. Through lectures and activities I was able to dip my toes into Javascript; allowing me to then learn front-end Frameworks and libraries such as JQuery, React, Bootstrap, and Material Ui as well as back-end frameworks and libraries such as Express and C# .Net. I now have many other libraries and frameworks in my toolbelt and I am currently working on my project building ability.</p>
                </div>
            </div>
        </div>
    )
};