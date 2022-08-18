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
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getCompanies()
  }, [])

  const getCompanies = async (search) => {
    setIsLoading(true)
    const result = await getCompaniesList(search)
    setIsLoading(false)

    if (!result.error) setCompanies(result.data)
    else setError("Er ging iets mis met het ophalen van de bedrijven. Probeer het alstublieft (later) opnieuw.")
  }

  const closeErrorSnackbar = () => {
    setError(undefined)
  }

  return (
    <Box className={styles.root}>
      <Header />

      <Container className={styles.fixedContainer} fixed sx={{ display: "flex" }}>
        <SearchField getCompanies={getCompanies} isLoading={isLoading} />
        <CompaniesList companies={companies} isLoading={isLoading} />
      </Container>

      <Snackbar
        open={error}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={closeErrorSnackbar}
      >
        <Alert className={styles.alert} onClose={closeErrorSnackbar} severity="error">
          <b>{error}</b>
        </Alert>
      </Snackbar>
    </Box >
  )
}

export default App
