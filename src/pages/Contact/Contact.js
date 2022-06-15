import React, { useRef }  from 'react'
import "./Contact.css"
import { MdClose, MdOutlineMail } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import cv from '../../assets/Abdulrasaq.pdf'


const Contact = () => {

  const [open, setOpen] = React.useState(false);


  const contactbox =
  [
    {
      icon:<MdOutlineMail/> ,
      title:"Email",
      userid:"rasaqadewuyi@gmail.com",
      link:"mailto:rasaqadewuyi@gmail.com"

    },

  {
    icon: <SiWhatsapp/>,
    title:"Whatsapp",
    userid:"+234-8104840215",
    link:"https://wa.me/2348104840215"

  }

  ]

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ugdprkm', 'template_8og5hi4', e.target, 'MzzSc4oEXCGKB8IRS')
      .then((result) => {
        setOpen(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contact' className='container'>
      <div className='contact-con'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
        <div className='contact-main-con'>
          <article className='contact'>
            {
              contactbox.map((x,i)=>(

                <div className='contact-email-whatsapp' key={i}>
                  <div className='email-whatsapp'>
                    <div className='contact-icons'>{x.icon}</div>
                    <h5 className='contact-title'>{x.title}</h5>
                    <div className='userid'>{x.userid}</div>
                    {/* <a href={x.link} >send a message</a> */}
                    <a href={x.link} className='SAM' target="_blank" rel="noopener noreferrer">send a message</a>
                  </div>
                </div>
              ))  
            }

            <div style={{fontSize:'16px'}}>
              <a href={cv} download>
                <button style={{width:'180px', outline:'none',border:'none', borderRadius:'5px',cursor:'pointer', backgroundColor:'var(--main-color)', padding:'12px', color:'var(--textWhite)'}}>
                  Download CV
                </button>
              </a>
            </div>
          </article>
          <div className='contact-form'>
          <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <MdClose fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Message sent
              </Alert>
            </Collapse>
            </Box>
              <form  onSubmit={sendEmail} className='contact-main-form' ref={form}>
                <input autoFocus type="text" name="name" placeholder='Your Name' required/>
                <input type="email" name="email" placeholder='Email' required/>
                <textarea placeholder='Message' name="message" id="" cols="30" rows="10" required></textarea>
                <button type='submit' className='btn btn-main'>Send Message</button>
                {/* <a href="" className='btn btn-main'>Send Message</a> */}
              </form>

            </div>
        </div>


      </div>
      

      
     </div>
  )
}

export default Contact