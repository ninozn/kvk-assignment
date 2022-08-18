import { useState, useEffect } from "react"

import Alert from "@mui/material/Alert"
import Box from "@mui/material/Paper"
import Container from "@mui/material/Container"
import Snackbar from "@mui/material/Snackbar"

import CompaniesList from "./components/CompaniesList"
import Header from "./components/Header"
import SearchField from "./components/SearchField"

import { getCompaniesList } from "./services/api"
import styles from "./styles/App.module.css"


function App() {
  const [companies, setCompanies] = useState([])
  const [error, setError] = useState(undefined)

  useEffect(() => {
    getCompanies()
  }, [])

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
    <Box className={styles.root}>
      <Header />

      <Container className={styles.fixedContainer} fixed sx={{ display: "flex" }}>
        <SearchField />
        <CompaniesList companies={companies} />
      </Container>

      <Snackbar
        open={error}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        autoHideDuration={6000}
        onClose={closeErrorSnackbar}
      >
        <Alert className={styles.alert} onClose={closeErrorSnackbar} severity="warning">
          Er ging iets mis met het ophalen van de bedrijven. Probeer het alstublieft (later) opnieuw.
        </Alert>
      </Snackbar>
    </Box >
  )
}

export default App
