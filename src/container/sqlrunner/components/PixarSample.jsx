import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const PixarSample = () => {
  return (
    <Grid>
      <Typography variant="h6">Pixar</Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID&nbsp;(num)</TableCell>
              <TableCell align="right">Title&nbsp;(text)</TableCell>
              <TableCell align="right">Director&nbsp;(text)</TableCell>
              <TableCell align="right">Year&nbsp;(num)</TableCell>
              <TableCell align="right">Length&nbsp;(num)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="name">
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="right">Toy Story</TableCell>
              <TableCell align="right">John Lasseter</TableCell>
              <TableCell align="right">1995</TableCell>
              <TableCell align="right">81</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default PixarSample;
