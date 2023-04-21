const Container = ({ children }) => {
  return (
    <div className='mt-14 w-full sm:w-[640px] mx-auto p-10 dark:bg-slate-950 min-h-screen'>
      {children}
    </div>
  );
};

export default Container;
