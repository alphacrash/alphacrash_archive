import { Alert, Container, CssBaseline, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import initSqlJs from "sql.js";
import SQLRunner from "./SQLRunner";
import Header from "./common/Header";

import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";
import ProblemStatements from "./ProblemStatements";
import CompletedDialog from "./CompletedDialog";

const Root = () => {
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);

  useEffect(async () => {
    // sql.js needs to fetch its wasm file, so we cannot immediately instantiate the database
    // without any configuration, initSqlJs will fetch the wasm files directly from the same path as the js
    // see ../craco.config.js
    try {
      const SQL = await initSqlJs({ locateFile: () => sqlWasm });
      setDb(new SQL.Database());
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
          <Grid container my={2} spacing={2}>
            <Grid item xs={6}>
              <ProblemStatements />
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "100vh",
              }}
            >
              <SQLRunner db={db} />
            </Grid>
          </Grid>
          <CompletedDialog />
        </Container>
      </>
    );
};

export default Root;
