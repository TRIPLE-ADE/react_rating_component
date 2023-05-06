import { illustration } from "../assets";
const ThankYou = ({ value }) => (
  <section className="thank-you">
    <img src={illustration} alt="illustraction" />
    <p className="message">You selected {value} out of 5</p>
    <h1>Thank you!</h1>
    <p>
      We appreciate you taking the time to give a rating. If you ever need more
      support, don’t hesitate to get in touch!
    </p>
  </section>
);

export default ThankYou;
