import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const SQLOutputTable = ({ columns, values }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((columnName, i) => (
            <TableCell key={i}>{columnName}</TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {values.map((row, i) => (
          <TableRow key={i}>
            {row.map((value, i) => (
              <TableCell key={i}>{value}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SQLOutputTable;
