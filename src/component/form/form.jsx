import { useCallback, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import useTelegram from "../../hooks/useTelegram";
import styles from "./form.module.css";

export default function Form() {
  const { tg } = useTelegram();
  const { values, handleChange } = useForm({
    country: "",
    street: "",
    subject: "",
  });
  const country = values.country;
  const street = values.street;
  const subject = values.subject;
  console.log(values);
  const onSendData = useCallback(
    () => tg.sendData(JSON.stringify(values)),
    [values]
  );
  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => tg.offEvent("mainButtonClicked", onSendData);
  }, [onSendData]); //Указать в зависимостях onSendData для передачи актуальных данных

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить",
    });
  }, []);

  useEffect(() => {
    if (!country || !street) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street]);

  return (
    <form className={styles.form}>
      <h3>Введите Ваши данные</h3>

      <input
        className={styles.input}
        value={country}
        type="text"
        placeholder="Страна"
        name={"country"}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        value={street}
        type="text"
        placeholder="Улица"
        name={"street"}
        onChange={handleChange}
      />
      <label htmlFor={"subject"} className={styles.label}>
        Введите форму часной собственности
      </label>
      <select
        value={subject}
        onChange={handleChange}
        className={styles.select}
        name={"subject"}
      >
        <option value="physical">Физ. лицо</option>
        <option value="legal">Юр. лицо</option>
      </select>
    </form>
  );
}
