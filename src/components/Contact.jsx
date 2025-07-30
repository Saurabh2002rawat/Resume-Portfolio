import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
   const formRef = useRef () ;

   const sendEmail = (e) => {
      e.preventDefault () ;

      emailjs.sendForm( 
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
         formRef.current, 
         import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
         () => {
            alert ("Thanks for the Mail! Will Contact you soon ") ;
            formRef.current.reset () ;
         },
         (error) => {
            alert ( "Failed to send Email : " + error.text ) ;
         }
      );
   };

  return (
    <div id="contact">
    <div className="container">
        <div className="row">
            <div className="contact-left">
                <h1 className="sub">Contact Me</h1>
                    <p><i className="fas fa-paper-plane"></i>sr23mcf1r40@student.nitw.ac.in</p>
                    <p><i className="fas fa-phone-square-alt"></i>+91 9997545874</p>
                <div className="social-icons">
                    <a href="https://github.com/Saurabh2002rawat"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/-rawat-saurabh/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://x.com/saurabhRawat2k2"><i className="fab fa-twitter-square"></i></a>
                    <a href="https://www.instagram.com/saurabh2002rawat/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/saurabh.rawat.12764874/"><i className="fab fa-facebook"></i></a>
                </div>
                <a href="/continue.pdf" download className="btn btn2">Download CV</a>
            </div>

            <div className="contact-right">
                <form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" name="Name" placeholder="Your Name" required />
                    <input type="email" name="Email" placeholder="abc@example.com" required />
                    <input type="text" name="Subject" placeholder="Subject..." required />
                    <textarea name="Message" rows="6" placeholder="Write Here..."></textarea>
                    <button type="submit" className="btn btn2">Submit</button>
                </form>

                {/* <span id="msg"></span>  */}
            </div>
        </div>
    </div>
    <div className="copyright">
        <p>
            Made with <i className="fas fa-heart"> </i> by Torpedo  
        </p>
    </div>
</div>
  )
}

export default Contact
