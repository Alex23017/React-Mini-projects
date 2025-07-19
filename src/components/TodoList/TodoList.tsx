import { useEffect, useRef, useState } from "react";
import bgImage from "./assets/cyberBG.jpg";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import {
  addNote,
  saveEdit,
  removeNote,
  removeAll,
  cancelEdit,
  isOpen,
  setNewNote,
  setValue,
  initNotes,
} from "../../redux/TodoSlice";
import { debounce, DebouncedFunc } from "lodash";

const TodoList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { notes, value, isOpenEdit, newNote, idNote } = useSelector(
    (state: RootState) => state.todo,
  );
  const ref = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<DebouncedFunc<(value: string) => void>>(null);

  useEffect(() => {
    debounceRef.current = debounce((value: string) => {
      dispatch(setValue(value));
    }, 500);

    if (searchTerm !== undefined) {
      debounceRef.current(searchTerm);
    }

    return () => {
      debounceRef.current?.cancel();
    };
  }, [searchTerm, dispatch]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("noteStorage");
    if (storedNotes) {
      dispatch(initNotes(JSON.parse(storedNotes)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("noteStorage", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (!value.trim()) return;
    const newNote = {
      text: value,
      id: Date.now(),
      number: notes.length + 1,
    };
    dispatch(addNote(newNote));
    dispatch(setValue(""));
    ref.current?.focus();
  };

  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="min-h-screen mt-0.5 pt-40">
      <div className="flex items-center flex-col mt-0 pt-40">
        <h1
          className="italic font-serif text-3xl animate-text-color-change font-medium drop-shadow-lg rounded-bl-2xl rounded-tr-2xl px-20 py-2 
          cursor-pointer bg-black/80 shadow-md shadow-white dark:shadow-gray-300 dark:shadow-md dark:bg-white dark:text-black">
          Todo List
        </h1>

        <div
          className="bg-gradient-to-r from-black/90 via-black/70 to-black/95 w-1/3 p-4 mt-4 flex justify-center rounded-2xl 
          shadow-md shadow-[rgb(144,245,255)] dark:shadow-gray-300 flex-col gap-5 items-center ">
          {!isOpenEdit && (
            <>
              <div className="w-2/3">
                <input
                  ref={ref}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="write or search note..."
                  className="focus:shadow-[rgb(144,245,255)] italic font-medium text-black focus:shadow-lg
                    shadow-black/50 p-2 rounded-lg text-center w-full text-black/60 break-words shadow-md"
                />
              </div>

              <div className="animate-pulse hover:animate-none flex flex-col">
                <button
                  onClick={handleAddNote}
                  className="active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg animate-shadow-color-change
                    hover:animate-none drop-shadow-lg shadow-black/40 active:translate-y-2 transition ease-out duration-200 
                    mt-4 px-20 py-3 bg-red-400 font-bold text-white hover:bg-red-500 rounded-xl">
                  ADD NOTE
                </button>
                {notes.length > 0 && (
                  <button
                    onClick={() => dispatch(removeAll())}
                    className="active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg animate-shadow-color-change 
                      hover:animate-none drop-shadow-lg shadow-black/40 active:translate-y-2 transition ease-out 
                      duration-200 mt-4 px-20 py-3 bg-black font-bold text-white hover:bg-red-500 rounded-xl">
                    Remove All
                  </button>
                )}
              </div>

              <ul className="w-2/3 p-2 flex flex-col gap-4">
                {notes
                  .filter(
                    (note) =>
                      note.text.toLowerCase().includes(value.toLowerCase()) ||
                      note.number.toString().includes(value),
                  )
                  .map((note) => (
                    <li
                      key={note.id}
                      className="bg-white/90 p-2 flex flex-col break-words rounded-md italic font-serif 
                        shadow-[rgb(144,245,255)] shadow-md">
                      <div className="flex flex-shrink-1">
                        <h2 className="bg-red-300 px-3 py-1 rounded-full text-black shadow-md shadow-black mb-4">
                          {note.number}
                        </h2>
                      </div>
                      <span>{note.text}</span>
                      <button
                        onClick={() => dispatch(isOpen(note))}
                        className="self-center w-4/12 active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg 
                          animate-shadow-color-change hover:animate-none drop-shadow-lg shadow-black/40 active:translate-y-1 
                          transition ease-out duration-200 mt-4 py-2 bg-red-400 font-bold text-white hover:bg-red-700 rounded-xl">
                        Edit note
                      </button>
                      <button
                        onClick={() => dispatch(removeNote(note.id))}
                        className="self-center w-4/12 active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg 
                          animate-shadow-color-change hover:animate-none drop-shadow-lg shadow-black/40 active:translate-y-1 
                          transition ease-out duration-200 mt-4 py-2 bg-black font-bold text-white hover:bg-red-700 rounded-xl">
                        Delete note
                      </button>
                    </li>
                  ))}
              </ul>
            </>
          )}

          {isOpenEdit && (
            <>
              <div className="w-2/3">
                <input
                  ref={ref}
                  value={newNote}
                  onChange={(e) => dispatch(setNewNote(e.target.value))}
                  placeholder="Your note here..."
                  className="focus:shadow-[rgb(144,245,255)] italic font-medium text-black focus:shadow-lg
                    shadow-black/50 p-2 rounded-lg text-center w-full text-black/60 break-words shadow-md"
                />
              </div>

              <ul className="w-2/3 p-2 flex flex-col gap-4">
                {notes
                  .filter((note) => note.id === idNote)
                  .map((note) => (
                    <li
                      key={note.id}
                      className="bg-white/90 p-2 flex flex-col break-words rounded-md italic font-serif 
                        shadow-[rgb(144,245,255)] shadow-md">
                      <div className="flex flex-shrink-1">
                        <h2 className="bg-red-300 px-3 py-1 rounded-full text-black shadow-md shadow-black mb-4">
                          {note.number}
                        </h2>
                      </div>
                      <span>{note.text}</span>
                      <button
                        onClick={() => dispatch(saveEdit(newNote))}
                        className="self-center w-4/12 active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg 
                          animate-shadow-color-change hover:animate-none drop-shadow-lg shadow-black/40 active:translate-y-1 
                          transition ease-out duration-200 mt-4 py-2 bg-red-400 font-bold text-white hover:bg-red-700 rounded-xl">
                        Save Edit
                      </button>
                      <button
                        onClick={() => dispatch(cancelEdit())}
                        className="self-center w-4/12 active:shadow-white/50 dark:active:shadow-white/50 active:shadow-lg 
                          animate-shadow-color-change hover:animate-none drop-shadow-lg shadow-black/40 active:translate-y-1 
                          transition ease-out duration-200 mt-4 py-2 bg-black font-bold text-white hover:bg-red-700 rounded-xl">
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
