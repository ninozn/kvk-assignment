import Header from "./components/Header";
import SearchField from "./components/SearchField";
import Container from '@mui/material/Container';
import Box from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CompaniesList from "./components/CompaniesList";
import { useState, useEffect } from 'react';
import { getCompaniesList } from './services/api';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function App() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(undefined)

  useEffect(() => {
    getCompanies()
  }, []);

  const getCompanies = async () => {
    const result = await getCompaniesList()

    if (!result.error) setCompanies(result.data)
    // TODO - implement error handling
    else setError(result.error)
  }

  const closeErrorSnackbar = () => {
    setError(undefined)
  }

  return (
    <Box>
      <Header />

      <Container fixed sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchField />
          </Grid>
          <Grid item xs={12}>
            <CompaniesList companies={companies} />
          </Grid>
        </Grid >
      </Container>

      <Snackbar
        open={error}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        autoHideDuration={6000}
        onClose={closeErrorSnackbar}
      >
        <Alert onClose={closeErrorSnackbar} severity="warning" sx={{ width: '100%' }}>
          Er ging iets mis met het ophalen van de bedrijven. Probeer het alstublieft (later) opnieuw.
        </Alert>
      </Snackbar>
    </Box >
  );
}

export default App;
