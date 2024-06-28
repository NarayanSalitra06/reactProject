import "bootstrap/dist/css/bootstrap.min.css";
import css from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <div className={css.container}>
        <div class="contact-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, comments, or concerns, feel free to reach
            out to us. We're here to help!
          </p>

          <div class="contact-details">
            <p>
              <strong>Customer Service:</strong>
            </p>
            <p>
              Email: <a href="mailto:support@nik.com">support@nik.com</a>
            </p>
            <p>
              Phone: <a href="tel:+91 9999222234">+91 9999222234 </a>
            </p>

            <p>
              <strong>Headquarters:</strong>
            </p>
            <p>Nike, Inc.</p>

            <p>Indore 452001</p>
            <p>madhya pradesh</p>
            <p>INDIA</p>

            <p>
              <strong>Social Media:</strong>
            </p>
            <p>
              Follow us on our social media channels for the latest updates and
              promotions:
            </p>
            <p>
              <a href="https://www.facebook.com/" target="_blank">
                Facebook
              </a>{" "}
              |
              <a href="https://twitter.com/" target="_blank">
                Twitter
              </a>{" "}
              |
              <a href="https://www.instagram.com/" target="_blank">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
