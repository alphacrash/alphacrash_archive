import React from "react";
import { Alert, Container, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import initSqlJs from "sql.js";
import Header from "./common/Header";

import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";
import { useDispatch, useSelector } from "react-redux";
import { updateDb } from "../features/appSlice";
import CompletedDialog from "./CompletedDialog";
import Main from "./Main";

const Root = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const db = useSelector((state) => state.app.db);

  useEffect(async () => {
    try {
      const SQL = await initSqlJs({ locateFile: () => sqlWasm });
      dispatch(updateDb(new SQL.Database()));
    } catch (err) {
      setError(err);
    }
  }, []);

  if (error) return <Alert severity="error">{error.toString()}</Alert>;
  else if (!db) return <Alert severity="info">Loading...</Alert>;
  else
    return (
      <>
        <CssBaseline />
        <Header />
        <Container component="main">
          <Main />
          <CompletedDialog />
        </Container>
      </>
    );
};

export default Root;
