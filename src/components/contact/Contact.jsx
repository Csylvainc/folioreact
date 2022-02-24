import "./contact.scss";
import React, { useState } from "react";




export default function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    console.log(mail);
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation = "dongle 1s";
      setTimeout(() =>{
        mail.style.display = "none";
      }, 1000);
      return false;
    }
  };

  const failMessage = (message) => {
    let formMess = document.querySelector('.form-message');
    formMess.innerHTML = message;
    formMess.style.opacity = '1';
    formMess.style.background = "rgb(253,87,87)";
    
    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');

    }

  const succesMessage = () => {
    let formMess = document.querySelector('.form-message');

    formMess.innerHTML = "Merci pour votre message ! Je vous contacte au plus vite."
    formMess.style.background ="#ee0e89";
    formMess.style.color =" #f2f2f2";
    formMess.style.opacity = '1';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMess.style.opacity = '0';
    }, 5000);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message){
      sendFeedback("template_geu5cot", {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      failMessage("Merci de remplir correctement les champs requis");
    }
    
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("service_d8qi9mp", templateId, variables)
      .then((res) => {
        succesMessage();
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => {
          failMessage("Une erreur s'est produite, veuillez réessayer.")
        }
        );
  };
  return (
    <div className="contact" id="contact">
      <form className="contact-form">
        <h2>Contactez moi</h2>
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="nom *"
            value={name}
            autoComplete="off"
          />
          <input
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="société"
            value={company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="téléphone"
            value={phone}
          />
          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email *"
              value={email}
              autoComplete="off"
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
          />
        </div>
        <input
          className="button"
          type="button"
          value="Envoyer"
          onClick={handleSubmit}
        />
        <div className="form-message"></div>
      </form>
    </div>
  );
};
