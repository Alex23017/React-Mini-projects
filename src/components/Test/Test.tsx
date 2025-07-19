import { useEffect, useRef, useState } from "react";
import { debounce, DebouncedFunc } from "lodash";

const listCard = [
  { id: 1, name: "alex", age: 20 },
  { id: 2, name: "Dima", age: 11 },
  { id: 3, name: "Anna", age: 26 },
];

const Test = () => {
  const debounceRef = useRef<DebouncedFunc<(value: string) => void | null>>(null);
  const [list, setList] = useState(listCard);
  const [value, setValue] = useState("");

  useEffect(() => {
    debounceRef.current = debounce((value: string) => {
      const filteredList = listCard.filter((item) =>
        item.name.toLowerCase().includes(value.trim().toLowerCase()),
      );
      setList(filteredList);
    }, 500);
    return () => {
      debounceRef.current?.cancel();
    };
  }, []);

  useEffect(() => {
    debounceRef.current?.(value)
    
  },[value])



  return (
    <div className="flex justify-center text-2xl items-center h-screen flex-col">
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="search"
        />
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
    </div>
  );
};

export default Test;
