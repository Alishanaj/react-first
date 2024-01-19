import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import './Contact.css';

const Contact = () => {
  const contact = [
    {
      id: 1,
      email: "alishan@mean3.com",
      platform: "Email",
      link: "mailto:alishan@mean3.com",
      link_text: "Send a Message",
    },
    {
      id: 2,
      email: "alishan.jessani1405@gmail.com",
      platform: "Messenger",
      link: "mailto:alishan@mean3.com",
      link_text: "Send a Message",
    },
    {
      id: 3,
      email: "alishan@mean3.com",
      platform: "Whatsapp",
      link: "mailto:alishan@mean3.com",
      link_text: "Send a Message",
    },
  ];

  return (
    <section id="contact">
      <h5>Contact me</h5>
      <h2>Get In Touch</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contact.map((item1) => {
            return (
              <article className="contact__option" key={item1.id}>
                <MdOutlineEmail className="contact_option_icon" />
                <h4>{item1.email}</h4>
                <h5>{item1.platform}</h5>
                <a href={item1.link} target="_blank">
                  {item1.link_text}
                </a>
              </article>
            );
          })
          }
        </div>

        {/* end of contact options */}

        <form action="">
            <input type="text" name="name" id="" placeholder="Enter your name" required />
            <input type="email" name="email" id="" placeholder="Enter your email" required />
            <input type="number" name="phone" id="" placeholder="Enter your phone" required />
            <textarea name="" id="" placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn-primary send-new">Send</button>
            

        </form>
      </div>
    </section>
  );
};

export default Contact;
