import React from "react";
import Layout from "@theme/Layout";
import { Grid, Typography } from "@mui/material";
import questions from "../container/data/questions.json";
import Link from "@docusaurus/Link";

export default function MyReactPage() {
  return (
    <Layout>
      {questions["data"].length}
      {questions["data"].map((item) => (
        <Question item={item} key={item.id} />
      ))}
    </Layout>
  );
}

const Question = ({ item }) => {
  return (
    <>
      {item && (
        <Grid>
          <Typography
            component={Link}
            href={`https://leetcode.com/problems/${item.slug}/`}
          >
            {" "}
            {item.title}
          </Typography>
        </Grid>
      )}
    </>
  );
};
