import { MdDarkMode } from "react-icons/md";
import { BiSun } from "react-icons/bi";

const Theme = (props) => {
  return (
    <button
      {...props}
      className='bg-rose-800 w-10 h-10 rounded-full shadow-md shadow-slate-500 dark:shadow-rose-500 grid place-items-center text-2xl text-white fixed bottom-5 right-5 cursor-pointer'
    >
      {props.theme == "true" ? <BiSun /> : <MdDarkMode />}
    </button>
  );
};

export default Theme;
