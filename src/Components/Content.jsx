import { RiCloseFill } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Content = (props) => {
  const data = props.data;
  const handleCheck = (e) => {
    Swal.fire({
      title: "Apakah To Do sudah selesai?",
      text: "Anda tidak dapat mengembalikan tindakan ini!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sudah dong!",
    }).then((result) => {
      if (result.isConfirmed) {
        props.cheked(e.target.id);
        Swal.fire("Sukses!", "To Do selesai dikerjakan.", "success");
      }
    });
  };

  const handleDelete = (e) => {
    Swal.fire({
      title: "Anda yakin, akan menghapus To Do ini?",
      text: "Anda tidak dapat mengembalikan tindakan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yakin dong!",
    }).then((result) => {
      if (result.isConfirmed) {
        props.delete(e.target.id);
        Swal.fire("Sukses!", "To Do sukses dihapus.", "success");
      }
    });
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
