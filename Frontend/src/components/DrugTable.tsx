import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@mui/material";
import type { DrugList } from "../types/DrugType";

interface DrugTableProps {
    drugs: DrugList;
}

const DrugTable = ({ drugs }: DrugTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // You can set default page size here

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedDrugs = drugs.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
    
  useEffect(() => {
    setPage(0);
  }, [drugs]);

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "2rem", overflowX: "auto" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "60px" }}>Id</TableCell>
            <TableCell sx={{ width: "100px" }}>Code</TableCell>
            <TableCell sx={{ width: "250px" }}>Name</TableCell>
            <TableCell sx={{ width: "200px" }}>Company</TableCell>
            <TableCell sx={{ width: "150px" }}>Launch Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedDrugs.map((drug, index) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={index}
            >
              <TableCell>{page * rowsPerPage + index + 1}</TableCell>
              <TableCell>{drug.code}</TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "250px",
                }}
              >
                {`${drug.genericName} (${drug.brandName})`}
              </TableCell>
              <TableCell
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "200px",
                }}
              >
                {drug.company}
              </TableCell>
              <TableCell>
                {new Date(drug.launchDate).toLocaleDateString("de-DE")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={drugs.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50]}
      />
    </TableContainer>
  );
};

export default DrugTable;
