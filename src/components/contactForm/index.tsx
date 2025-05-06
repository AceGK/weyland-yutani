import { useState, ChangeEvent } from "react";
import styles from "./styles.module.scss";
import InputField from "../input";
import Button from "../button";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true); // open modal
    setForm({ name: "", email: "", message: "" });
  };

  const handleCloseModal = () => setModalOpen(false);

  const current = new Date();

  const day = current.getDate(); // returns 1–31
  const month = current.toLocaleString("default", { month: "long" }); // returns "May"
  const year = current.getFullYear() + 100;
  const displayDate = `${day} ${month}, ${year}`;

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholderText="Name"
          required
        />
        <InputField
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholderText="Email"
          required
        />
        <InputField
          type="textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholderText="Message"
          required
        />
        <Button type="submit" text="Send Message" />
      </form>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modal__title}>
              // Message Sent
            </div>
            <div className={styles.modal__body}>
              <p>Your transmission has been encrypted and queued for uplink.</p>
              <p>
                Estimated arrival: <strong><em>{displayDate}</em></strong>
              </p>
              <p>
                <em>Thank you for contacting Weyland-Yutani Corporation.</em>
              </p>
              <Button 
                type="button"
                text="Close"
                onClick={handleCloseModal}
                fill={true}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
