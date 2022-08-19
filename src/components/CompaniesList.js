import { useState } from "react"
import PropTypes from "prop-types"

import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Paper from "@mui/material/Paper"
import NoResultsIcon from "@mui/icons-material/SearchOff"

import CompanyCard from "./CompanyCard"

import styles from "../styles/CompaniesList.module.css"
import CompanyDetailsDialog from "./CompanyDetailsDialog"


export default function CompaniesList(props) {
    const { companies, isLoading, setError } = props
    const [openDetailsForCompany, setOpenDetailsForCompany] = useState(undefined)

    const getListContent = () => {
        if (isLoading) {
            return (
                <Box className={styles.box} sx={{ display: "flex" }}>
                    <CircularProgress />
                </Box>
            )

        }
        else if (companies.length > 0) {
            return companies.map(c => (
                <CompanyCard key={c.id} company={c} setOpenDetailsForCompany={setOpenDetailsForCompany} />
            ))
        }
        else {
            return (
                <Box className={styles.box}>
                    <NoResultsIcon className={styles.icon} />
                    Geen bedrijven gevonden.
                </Box>
            )
        }
    }

    console.log(openDetailsForCompany)

    return (
        <Paper className={styles.paper} data-testid="companies-list">
            {getListContent()}

            <CompanyDetailsDialog
                open={Boolean(openDetailsForCompany)}
                onClose={() => setOpenDetailsForCompany(undefined)}
                company={openDetailsForCompany}
                setError={setError}
            />
        </Paper>
    )
}

CompaniesList.propTypes = {
    companies: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setError: PropTypes.func.isRequired,
}