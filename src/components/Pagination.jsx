const Pagination = ({ currentPage, setCurrentPage, noOfPages }) => {
  console.log(noOfPages);
  return (
    <>
      <button
        className="pagination-number"
        disabled={currentPage === 0}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        ◀️
      </button>
      {[...Array(noOfPages).keys()].map((item) => (
        <button
          key={item}
          onClick={() => setCurrentPage(item)}
          className={
            "pagination-number" + (currentPage === item ? " active" : "")
          }
        >
          {item + 1}
        </button>
      ))}
      <button
        className="pagination-number"
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage >= noOfPages - 1}
      >
        ▶️
      </button>
    </>
  );
};

export default Pagination;
