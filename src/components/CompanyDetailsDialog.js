import { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import HomeIcon from "@mui/icons-material/Home"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import Grid from "@mui/material/Grid"
import LanguageIcon from "@mui/icons-material/Language"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import Typography from "@mui/material/Typography"

import styles from "../styles/CompanyDetailsDialog.module.css"
import { getCompanyDetails } from "../services/api"


export default function CompanyDetailsDialog(props) {
    const { open, onClose, company, setError } = props
    const [companyDetails, setCompanyDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (open && company) getDetails()
    }, [open])

    const getDetails = async () => {
        setIsLoading(true)
        const result = await getCompanyDetails(company.id)
        setIsLoading(false)

        if (!result.error) setCompanyDetails(result.data[0])
        else setError("Er ging iets mis met het ophalen de bedrijfinformatie. Probeer het alstublieft (later) opnieuw.")
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: { width: "100%" }
            }}
        >
            <DialogContent>
                {isLoading ?
                    <Box sx={{ display: "flex" }}>
                        <CircularProgress />
                    </Box>
                    :
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box
                                className={styles.image}
                                component="img"
                                alt={`${company?.name} logo`}
                                src={company?.logo}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography component="div" variant="h4">
                                {company?.name}
                            </Typography>
                            <Typography component="div" variant="subtitle1">
                                {companyDetails?.catchPhrase}
                            </Typography>

                            <Box className={styles.detailsContainer} >
                                <Box className={styles.iconTextBox}>
                                    <HomeIcon className={styles.icon} />
                                    <div>
                                        {company?.streetName} <br />
                                        {`${company?.zipCode} ${company?.city}`}
                                    </div>
                                </Box>

                                <Box className={styles.iconTextBox}>
                                    <LocalPhoneIcon className={styles.icon} />
                                    <div>
                                        {companyDetails?.phoneNumber}
                                    </div>
                                </Box>

                                <Box className={styles.iconTextBox}>
                                    <LanguageIcon className={styles.icon} />
                                    <a
                                        className={styles.link}
                                        href={companyDetails?.website}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {companyDetails?.website}
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Sluiten</Button>
            </DialogActions>
        </Dialog >
    )
}

CompanyDetailsDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    company: PropTypes.string.isRequired,
    setError: PropTypes.func.isRequired,
}