const Form = (props) => {
  return (
    <form
      {...props}
      action=''
      className='bg-white dark:bg-rose-800  shadow-md rounded-md flex flex-col gap-3 p-3 text-xs sm:text-base'
    >
      <label htmlFor='name'>
        <span className='font-semibold text-rose-700 dark:text-white'>
          Nama
        </span>
        <input
          type='text'
          name='name'
          id='name'
          required
          autoComplete='off'
          placeholder='Nama kegiatan ...'
          className='block w-full border-2  placeholder:italic placeholder:text-[10px] sm:placeholder:text-base outline-none p-2 rounded-md border-rose-400 mt-2'
        />
      </label>
      <label htmlFor='date'>
        <span className='font-semibold text-rose-700 dark:text-white'>
          Tanggal
        </span>
        <input
          type='date'
          name='date'
          id='date'
          required
          className='block w-full border-2 outline-none p-2 rounded-md border-rose-400 mt-2'
        />
      </label>
      <button
        type='submit'
        className='bg-rose-700 text-white p-2 rounded-sm font-bold dark:bg-white dark:text-rose-900 dark:hover:bg-rose-200 hover:bg-rose-800 transition-all duration-300'
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
