import PropTypes from "prop-types"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardMedia"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"

import styles from "../styles/CompanyCard.module.css"


export default function CompanyCard(props) {
    const { company, setOpenDetailsForCompany } = props

    return (
        <Card
            className={styles.card}
            variant="outlined"
            onClick={() => setOpenDetailsForCompany(company)}
            data-testid="companies-card"
        >
            <CardMedia
                component="img"
                sx={{ width: 120 }}
                image={company.logo}
                alt={`${company.name} logo`}
            />
            <CardContent className={styles.cardContent}>
                <Box className={styles.box}>
                    <Typography component="div" variant="h5">
                        {company.name}
                    </Typography>

                    {company.streetName} <br />
                    {`${company.zipCode} ${company.city}`}
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small" color="inherit">Meer info</Button>
            </CardActions>
        </Card>
    )
}

CompanyCard.propTypes = {
    company: PropTypes.object.isRequired,
    setOpenDetailsForCompany: PropTypes.func.isRequired
}