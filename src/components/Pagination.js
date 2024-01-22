import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function CustomPagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="error"
      />
    </Stack>
  );
}

export default CustomPagination;
