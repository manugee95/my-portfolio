function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Get In Touch</h1>
      <form>
        <p>
          Have a question or want to hire me? Feel free to reach out.
        </p>
        <div className="formfields">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone Number" required />
          <textarea placeholder="Message" required></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
