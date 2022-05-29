import { ContactDiv } from "../../Styles/ContactStyles";

export function Contact(){

    return(
        <ContactDiv>
            <div className="left">
                <h1>Let's make something amazing <br /> together.</h1>
                <h1>Starts by saying hi</h1>
                <a target="_blank" rel="noreferrer" href="./Shubham.docx.pdf"><button>Download Resume</button></a>
            </div>
            <div className="right">
                 <p>Information</p>
                 <p>Bahadurgarh,Haryana,India</p>
                 <h2>skashyap061998@gmail.com</h2>
                
                 <div className="links">
                     <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jaish_kk/"><button><i class="fa-brands fa-instagram-square"></i>Instagram</button></a>
                     <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/feed/"><button><i class="fab fa-linkedin"></i>LinkedIn</button></a>
                     <a target="_blank" rel="noreferrer" href="https://github.com/skashyap061998"><button><i class="fab fa-github"></i>Github</button></a>
                 </div>
            </div>
        </ContactDiv>
    )
}