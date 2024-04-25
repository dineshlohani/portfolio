import React, { useRef, useState } from "react";
import "../contact/contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";

const PDF_FILE_URL = "http://localhost:3000/DineshCv.pdf";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jxzx4gs",
        "template_y631q63",
        formRef.current,
        "RC3-2PV51Y0dyqagL"
      )
      .then(
        (result) => {
          console.log(result.text);

          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };
  return (
    <div className="c">
      <div className="c-bg"> </div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +977-9863-913-049
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              dineshlohani333@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Kanti Path, Kathmandu 44600, Nepal
            </div>
          </div>
          <div class="main-font">
            <button
              id="btn"
              onClick={() => {
                downloadFileAtURL(PDF_FILE_URL);
              }}
            >
              <spam id="symbol">
                <spam>⬇</spam>
              </spam>
              <spam id="text"> Download CV</spam>
              <div id="progress"></div>
            </button>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch.Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="input-group">
              <div>
                <input type="text" id="name" className="..." required />
                <label htmlFor="name" class="input-group label">
                  Full Name
                </label>
                <br />
              </div>
            </div>
            <div className="input-group">
              <div>
                <input type="email" id="email" className="..." required />
                <label htmlFor="email" class="input-group label">
                  Email
                </label>
                <br />
              </div>
            </div>
            <div className="input-group">
              <div>
                <input type="textarea" id="Subject" className="..." required />
                <label htmlFor="Subject" class="input-group label">
                  Subject
                </label>
                <br />
              </div>
            </div>
            <div className="input-group">
              <div>
                <input type="textarea" id="message" className="..." required />
                <label htmlFor="message" class="input-group label">
                  Message
                </label>
                <br />
              </div>
            </div>
            <input type="submit" value="Submit" className="submit" />
            {done && "   ...thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
