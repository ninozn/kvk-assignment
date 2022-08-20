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
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false)
  const [page, setPage] = useState(1)
  const [totalCompanies, setTotalCompanies] = useState(1)
  const [search, setSearch] = useState("")

  useEffect(() => {
    getCompanies(true)
  }, [])

  const getCompanies = async (reset = false) => {
    let newPage

    if (reset) {
      newPage = 1
      setIsLoading(true)
    } else {
      newPage = page + 1
      setIsLoadingNextPage(true)
    }

    const result = await getCompaniesList(search, newPage)

    if (!result.error) {
      setTotalCompanies(result.total)
      if (!reset) setCompanies([...companies, ...result.data])
      else setCompanies(result.data)
    }
    else setError("Er ging iets mis met het ophalen van de bedrijven. Probeer het alstublieft (later) opnieuw.")

    setPage(newPage)

    if (reset) setIsLoading(false)
    else setIsLoadingNextPage(false)
  }

  const closeErrorSnackbar = () => {
    setError(undefined)
  }

  return (
    <Box className={styles.root}>
      <Header />

      <Container className={styles.fixedContainer} fixed sx={{ display: "flex" }}>
        <SearchField
          getCompanies={getCompanies}
          search={search}
          setSearch={setSearch}
        />
        <CompaniesList
          companies={companies}
          isLoading={isLoading}
          setError={setError}
          hasNextPage={companies.length !== totalCompanies}
          getCompanies={getCompanies}
          isLoadingNextPage={isLoadingNextPage}
        />
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
