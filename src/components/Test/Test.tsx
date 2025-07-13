import visa from "./assets/visa-svgrepo-com.svg";
import master from "./assets/mastercard-3-svgrepo-com.svg";
import vite from "./assets/vite-svgrepo-com.svg";
import logo from "./assets/organic-organism-svgrepo-com.svg";
import { useTheme } from "../ThemeContext/ThemeContext";

import TaiwLindTheme from "./components/TaiwLindTheme";

const Test = () => {

  // Use other theme and state from Taiwlind Test.component
  // const [day, setDay] = useState(() => {
  //   const saved = localStorage.getItem("storage");
  //   return saved === "dark" || saved === "light" ? saved : "light";
  // });

  //replace toggleTheme
  // const clickDay = () => {
  //   setDay((prevDay) => (prevDay === "light" ? "dark" : "light"));
  // };

  // useEffect(() => {
  //   document.body.className = day;
  //   localStorage.setItem("storage", day);
  // }, [day]);

  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white pt-40">
      <h1 className="text-5xl py-5 text-center mt-5 dark:text-white">Tailwind Theme DarkMode</h1>
      <header id="header" className="w-full bg-slate-400 p-4">
        <nav className="flex justify-center ">
          <ul className="flex gap-20 items-center text-2xl ">
            <img className="w-16" src={logo} alt="" />
            <li>My Profile</li>
            <li>Contact Us</li>
            <li>Help ?</li>
            <TaiwLindTheme/>
          </ul>
        </nav>
      </header>

      <div className="p-10 w-3/12 mx-auto mb-12">
        <section className={theme === "dark" ? "text-white" : ""}>
          <div className="text-2xl">Your balance</div>
          <div className="flex items-center gap-2 mb-3.5">
            <div className="text-center w-8 h-8 shadow-2xl bg-yellow-400 rounded-full flex items-center justify-center">
              <span className=" mr-0.5 italic font-bold text-red-400">V</span>
            </div>
            <div className="text-2xl">$1.878.67</div>
          </div>
          <button className="bg-blue-400 font-medium text-black w-full py-2 rounded-md flex items-center justify-center gap-2">
            <span>+</span>
            <span>Buy credits</span>
          </button>
        </section>
        <section className={theme === "dark" ? "text-white" : ""}>
          <div className="flex justify-between items-center mb-2.5 mt-5">
            <div className="font-semibold"> Paymant cards</div>
            <button className="font-semibold text-blue-500">+ Add Card</button>
          </div>
          <div className="flex items-center gap-3">
            <img src={visa} alt="visa" width={60} className="rounded-xl overflow-hidden shrink-0" />
            <div className="flex flex-col items-start w-full">
              <div>
                <div className="flex items-center gap-2 font-medium">
                  Domen Kralj{}
                  <div className="rounded-lg text-blue-500 bg-blue-100 px-1 py-[0.02rem] text-[0.7rem]">
                    Primary
                  </div>
                </div>
              </div>
              <div className="opacity-50 text-xs mt-0.5">**** 6775</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={master}
              alt="visa"
              width={60}
              className="rounded-xl overflow-hidden shrink-0"
            />
            <div className="flex flex-col items-start w-full">
              <div>
                <div className="flex  items-center gap-2 font-medium">
                  Domen Kralj{}
                  <div className="rounded-lg text-blue-500 bg-blue-100 px-1 py-[0.02rem] text-[0.7rem]">
                    Primary
                  </div>
                </div>
              </div>
              <div className="opacity-50 text-xs mt-0.5">**** 6775</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={vite} alt="visa" width={60} className="rounded-xl overflow-hidden shrink-0" />
            <div className="flex flex-col items-start w-full">
              <div>
                <div className="flex  items-center gap-2 font-medium">
                  Domen Kralj{}
                  <div className="rounded-lg text-blue-500 bg-blue-100 px-1 py-[0.02rem] text-[0.7rem]">
                    Primary
                  </div>
                </div>
              </div>
              <div className="opacity-50 text-xs mt-0.5">**** 6775</div>
            </div>
          </div>

          <div className="bg-green-200/15 rounded-lg py-2 px-3 text-sm">
            We are compliant with the payment card industry data security standard.
          </div>
        </section>
      </div>
    </div>
  );
};

export default Test;
