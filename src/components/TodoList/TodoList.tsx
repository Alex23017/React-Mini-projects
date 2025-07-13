
import { useEffect, useRef, useState } from "react";
import bgImage from "./assets/cyberBG.jpg";

interface INote {
  text: string;
  id: number;
  number: number;
}

const TodoList = () => {
  const [notes, setNotes] = useState<INote[]>(() => {
    const noteStorage = localStorage.getItem("noteStorage");
    return noteStorage ? JSON.parse(noteStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem("noteStorage", JSON.stringify(notes));
  }, [notes]);

  const [value, setValue] = useState<string>("");
  const [isOpenRemove, setisOpenRemove] = useState(false);
  console.log("isOpenRemove: ", isOpenRemove);

  const [isOpenEdit, setIsOpen] = useState<boolean>(false);

  const [newNote, setNewNote] = useState("");
  const [idNote, setIdNote] = useState<number | null>(null);

  const isOpen = (note: INote) => {
    setIsOpen(true);
    setNewNote(note.text);
    setIdNote(note.id);
  };

  const saveEdit = () => {
    if (idNote === null) return;
    setNotes(notes.map((note) => (note.id === idNote ? { ...note, text: newNote } : note)));
    cancelEdit();
  };

  const cancelEdit = () => {
    setIsOpen(false);
    setNewNote("");
    setIdNote(null);
  };

  const removeAll = () => {
    setNotes([]);
  };

  const addNote = () => {
    const newNote = { text: value, id: Date.now(), number: notes.length + 1 };
    if (!value.trim()) return;
    setNotes([...notes, newNote]);
    setValue("");
    ref.current?.focus();
  };
  const ref = useRef<HTMLInputElement>(null);

  const removeNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="min-h-screen mt-0.5">
      <div className="flex items-center flex-col mt-0 pt-40 ">
              
 
        <h1
          className="italic font-serif text-3xl animate-text-color-change font-medium drop-shadow-lg rounded-bl-2xl rounded-tr-2xl px-20 py-2 
        cursor-pointer bg-black/80 shadow-md  shadow-white dark:shadow-gray-300 dark:shadow-md dark:bg-white dark:text-black">
          Todo List

        </h1>

        <div className="bg-gradient-to-r from-black/90  via-black/70 to-black/95 w-1/3 p-4 mt-4 flex justify-center rounded-2xl shadow-md shadow-[rgb(144,245,255)] dark:shadow-gray-300 flex-col gap-5 items-center ">
          {!isOpenEdit && (
            <>
              <div className="w-2/3">
                <input
                  ref={ref}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                  value={value}
                  className="focus:shadow-[rgb(144,245,255)] italic
             font-medium text-black  focus:shadow-lg
              shadow-black/50 p-2
             rounded-lg text-center w-full
             text-black/60
             break-words shadow-md"
                  type="text"
                  placeholder="write or search note..."
                />
              </div>
              <div className="animate-pulse hover:animate-none flex flex-col">
                <button
                  onClick={addNote}
                  className="active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg animate-shadow-color-change hover:animate-none 
           drop-shadow-lg  shadow-black/40 active:translate-y-2 transition ease-out 
           duration-200 mt-4 px-20 py-3 bg-red-400 font-bold text-white hover:bg-red-500
           rounded-xl">
                  ADD NOTE
                </button>
                {!isOpenEdit && notes.length > 0 && (
                  <button
                    onClick={removeAll}
                    className="active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg animate-shadow-color-change hover:animate-none 
           drop-shadow-lg  shadow-black/40 active:translate-y-2 transition ease-out 
           duration-200 mt-4 px-20 py-3 bg-black font-bold text-white hover:bg-red-500
           rounded-xl">
                    Remove All
                  </button>
                )}
              </div>
              <ul className="w-2/3 p-2 flex flex-col gap-4 ">
                {notes
                  .filter(
                    (note) =>
                      note.text.toLowerCase().includes(value.toLowerCase()) ||
                      note.number.toString().includes(value),
                  )
                  .map((note, id) => (
                    <li
                      className="bg-white/90 p-2 flex flex-col  break-words rounded-md italic font-serif 
                shadow-[rgb(144,245,255)] 
                shadow-md"
                      key={note.id}>
                      <div className="flex flex-shrink-1 ">
                        <h2 className="bg-red-300 px-3 py-1 rounded-full text-black shadow-md shadow-black mb-4">
                          {note.number}
                        </h2>
                      </div>

                      <span>{note.text}</span>
                      <button
                        data-testid="test-btn"
                        onClick={() => isOpen(note)}
                        className="self-center  w-4/12 active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg 
                animate-shadow-color-change hover:animate-none 
                drop-shadow-lg  shadow-black/40 active:translate-y-1 transition ease-out 
                duration-200 mt-4 py-2 bg-red-400 font-bold text-white hover:bg-red-700
                rounded-xl">
                        Edit note
                      </button>
                      <button
                        onClick={() => removeNote(note.id)}
                        className="self-center  w-4/12 active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg 
                animate-shadow-color-change hover:animate-none 
                drop-shadow-lg  shadow-black/40 active:translate-y-1 transition ease-out 
                duration-200 mt-4 py-2 bg-black font-bold text-white hover:bg-red-700
                rounded-xl">
                        Delete note
                      </button>
                    </li>
                  ))}
              </ul>
            </>
          )}
          {isOpenEdit && (
            <>
              {" "}
              <div className="w-2/3">
                <input
                  ref={ref}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewNote(e.target.value)}
                  value={newNote}
                  className="focus:shadow-[rgb(144,245,255)] italic
             font-medium text-black  focus:shadow-lg
              shadow-black/50 p-2
             rounded-lg text-center w-full
             text-black/60
             break-words shadow-md"
                  type="text"
                  placeholder="Your note here..."
                />
              </div>
              <ul className="w-2/3 p-2 flex flex-col gap-4 ">
                {notes
                  .filter((note) => note.id === idNote)
                  .map((note, id) => (
                    <li
                      className="bg-white/90 p-2 flex flex-col  break-words rounded-md italic font-serif 
                shadow-[rgb(144,245,255)] 
                shadow-md"
                      key={note.id}>
                      <div className="flex flex-shrink-1 ">
                        <h2 className="bg-red-300 px-3 py-1 rounded-full text-black shadow-md shadow-black mb-4">
                          {note.number}
                        </h2>
                      </div>

                      <span>{note.text}</span>
                      <button
                        onClick={saveEdit}
                        className="self-center  w-4/12 active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg 
                animate-shadow-color-change hover:animate-none 
                drop-shadow-lg  shadow-black/40 active:translate-y-1 transition ease-out 
                duration-200 mt-4 py-2 bg-red-400 font-bold text-white hover:bg-red-700
                rounded-xl">
                        Save Edit
                      </button>

                      <button
                        onClick={cancelEdit}
                        className="self-center  w-4/12 active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg 
                animate-shadow-color-change hover:animate-none 
                drop-shadow-lg  shadow-black/40 active:translate-y-1 transition ease-out 
                duration-200 mt-4 py-2 bg-black font-bold text-white hover:bg-red-700
                rounded-xl">
                        Cancel edit
                      </button>
                    </li>
                  ))}
              </ul>
            </>
          )}
        </div>
      </div>

    </div>
  );
};

export default TodoList;
