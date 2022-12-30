import React, { useRef, useState } from "react";
import { Note } from "../models/note.model";
interface ICreateNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}
const CreateNotes: React.FC<ICreateNoteProps> = ({ notes, setNotes }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  // для ошибки
  const [error, setError] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    let time = new Date();
    // используем Intl.DateTimeFormat для более удобного отображения даты
    let formatter = new Intl.DateTimeFormat("ru", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    const setTime = formatter.format(time);
    // проверяем на заполнение полей
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      setError("Вы забыли заполнить все поля");
    } else {
      // убираем ошибку
      setError("");
      // обновляе массив заметок
      setNotes([
        ...notes,
        {
          id: new Date().toString(),
          title: (titleRef.current as HTMLInputElement).value,
          text: (textRef.current as HTMLTextAreaElement).value,
          color: (colorRef.current as HTMLInputElement).value,
          date: setTime,
        },
      ]);
      // очищаем поля формы
      formRef.current?.reset();
    }
  }
  return (
    <>
      <div className="create-note__wrapper">
        <div className="container">
          <h3 className="newNote-title">Создать заметку</h3>
          <hr />
          {error && <div className="error-form">{error}</div>}
          <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
            <label className="form-label" htmlFor="title">
              Название
            </label>
            <input
              className="input-note"
              ref={titleRef}
              id="title"
              type="text"
              placeholder={"Ваш текст"}
            />
            <label className="form-label" htmlFor="text">
              Текст
            </label>
            <textarea
              className="input-textarea"
              ref={textRef}
              name=""
              id="text"
            ></textarea>
            <label className="form-label color-label" htmlFor="title">
              Цвет
            </label>
            <input
              className="input-color"
              ref={colorRef}
              id="colorInput"
              defaultValue={"#ddfeff"}
              type="color"
              placeholder={"Ваш текст"}
            />
            <hr />
            <button className="createNote-button" type="submit">
              Добавить
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateNotes;
