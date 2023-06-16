import React from "react";

// 페이지네이션 gyu
const PageNationCustom = ({ totalPages, currentPage, setCurrentPage }) => {
  // console.log(totalPages, "============11111");
  // console.log(currentPage, "============22222");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {totalPages > 1 ? (
        <div className="custom-pagenation">
          <div>
            <button
              type="button"
              disabled={currentPage == 1}
              onClick={() => handlePageChange(1)}
            ></button>
            <button
              type="button"
              disabled={currentPage == 1}
              onClick={() => handlePageChange(currentPage - 1)}
            ></button>
          </div>
          <div>
            {Array.from({ length: totalPages }, (_, index) => index + 1)
              .filter(
                (page) =>
                  page <= currentPage + 2 &&
                  page >= currentPage - 1 &&
                  page <= totalPages
              )
              .map((page) => (
                <button
                  type="button"
                  key={page}
                  onClick={() => handlePageChange(page)}
                  // style={{
                  //   fontWeight: currentPage === page ? "bold" : "normal",
                  // }}
                  className={currentPage === page ? "active" : ""}
                >
                  {page}
                </button>
              ))}
          </div>
          <div>
            <button
              type="button"
              disabled={currentPage == totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            ></button>
            <button
              type="button"
              disabled={currentPage == totalPages}
              onClick={() => handlePageChange(totalPages)}
            ></button>
          </div>
        </div>
      ) : (
        <div className="custom-pagenation">
          <div>
            <button type="button" disabled></button>
            <button type="button" disabled></button>
          </div>
          <div>
            <button
              type="button"
              // style={{ fontWeight: "bold" }}
              className="active"
              disabled
            >
              1
            </button>
          </div>
          <div>
            <button type="button" disabled></button>
            <button type="button" disabled></button>
          </div>
        </div>
      )}
    </>
  );
};

export default PageNationCustom;
