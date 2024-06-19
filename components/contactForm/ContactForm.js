import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import "./style.css";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({});
  const [loading, setLoading] = useState(false);
  const [successSended, setSuccessSended] = useState(false);

  const chat_id = "6089511983";

  const sendMessage = async (message) => {
    const base_url = `https://api.telegram.org/bot6633992193:AAEhRvbFA35CQcVE0Runog5vFzTHKwF4hMc`;
    const url = `${base_url}/sendMessage`;

    await fetch(url, {
      body: JSON.stringify({
        chat_id,
        text: message,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
    });
  };

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const message = `
      NEW MESSAGE ⚡ 

name: ${values.name} 
email: ${values.email}
message:
${values.message}
  `;

      await sendMessage(message);

      setSuccessSended(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }

    reset();
  };

  useEffect(() => {
    setSuccessSended(false);
  }, []);

  return (
    <div className="col-lg-12">
      <div className="trm-contact-card">
        {!successSended ? (
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label>
              <input
                type="text"
                placeholder="Имя"
                {...register("name", { required: "Заполните поле" })}
              />
              <p> {errors.name ? errors.name.message : null}</p>
            </label>
            <label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Заполните поле",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Введите email",
                  },
                })}
              />
              <p>{errors.email ? errors.email.message : null}</p>
            </label>

            <label>
              <textarea
                rows={6}
                placeholder="Сообщение"
                defaultValue={""}
                {...register("message", { required: "Заполните поле" })}
              />
              <p>{errors.message ? errors.message.message : null}</p>
            </label>
            <div className="trm-form-bottom">
              <button
                disabled={loading}
                type="submit"
                className={`trm-btn ${loading ? "disabled" : null}`}
              >
                Отправить <i className="fas fa-arrow-right" />
              </button>
              <div className="trm-text-sm">
                * Обещаю конфиденциальность вашей личной информации
              </div>
            </div>
          </form>
        ) : (
          <div className="trm-success-banner" style={{ opacity: 1 }}>
            <img src="img/success.png" alt="success" className="trm-mb-15" />
            <h4 className="trm-mb-15">Success</h4>
            <div className="trm-text trm-mb-20">
              Ваше сообщение было отправлено успешно
            </div>
            <Link legacyBehavior href="/">
              <a className="pointer trm-btn">
                <i className="fas fa-arrow-left" /> Вернуться на главную
                страницу
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
