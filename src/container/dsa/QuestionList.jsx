import { Container, Grid, Typography } from "@mui/material";
import Layout from "@theme/Layout";
import React, { useState } from "react";
import data from "../data/questions.json";
import QuestionTable from "./QuestionTable";
import { filterQuestions } from "./utils/utils";
import Filters from "./components/Filters";

const QuestionList = ({ questions = data }) => {
  const [filters, setFilters] = useState({
    checked: false,
    patterns: [],
    difficulty: "",
    companies: [],
  });

  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Key Patterns: DSA</Typography>
          </Grid>
          <Grid item xs={12}>
            <Filters
              filters={filters}
              questions={questions}
              setFilters={setFilters}
            />
          </Grid>
        </Grid>

        <QuestionTable questions={filterQuestions(questions, filters)} />
      </Container>
    </Layout>
  );
};

export default QuestionList;
