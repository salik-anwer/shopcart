export const Loader = () => {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-screen">
        <svg className="animate-spin h-20 w-20" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#33b2d6" strokeWidth="4"></circle>
          <path className="opacity-75" fill="#FE9C00" d="M4 12a8 8 0 0116 0H4z"></path>
        </svg>
      </div>
    );
};