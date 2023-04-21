import { RiCloseFill } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import { useEffect } from "react";
const Content = (props) => {
  const data = props.data;
  const handleCheck = (e) => {
    const konfirmasi = confirm("Anda telah menyelesaikan todo ini!");
    if (konfirmasi) {
      props.cheked(e.target.id);
    }
  };

  const handleDelete = (e) => {
    const konfirmasi = confirm("Anda akan menghapus todo ini!");
    if (konfirmasi) {
      props.delete(e.target.id);
    }
  };
  return (
    <div className='text-sm bg-white dark:bg-rose-800 py-3 pr-5 pl-3 shadow-md mt-3 rounded-md'>
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className='bg-rose-700 p-2 rounded-sm dark:bg-rose-500 my-2 text-white relative'
          >
            <h1
              className={`font-semibold ${
                item.status == "cheked" ? "line-through italic" : ""
              }`}
            >
              {item.name}
            </h1>
            <p
              className={`text-[10px] ${
                item.status == "cheked" ? "line-through italic" : ""
              }`}
            >
              {item.date}
            </p>
            <div className='flex flex-col justify-center gap-1 absolute h-full top-0 -right-3'>
              <button
                onClick={handleCheck}
                className={`w-6 h-6 bg-white border-2 border-teal-600 rounded-full grid place-items-center text-lg text-teal-600 ${
                  item.status == "cheked" ? "hidden" : null
                }`}
              >
                <BsCheckLg id={item.id} />
              </button>
              <button
                onClick={handleDelete}
                className='w-6 h-6 bg-white border-2 border-rose-600 rounded-full  grid place-items-center text-lg text-rose-600'
              >
                <RiCloseFill id={item.id} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className='text-center font-extrabold text-rose-900 dark:text-white'>
          Data Kosong Nih!
        </h1>
      )}
    </div>
  );
};

export default Content;
