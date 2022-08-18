import PropTypes from "prop-types"
import Paper from "@mui/material/Paper"

import CompanyCard from "./CompanyCard"

import styles from "../styles/CompaniesList.module.css"


export default function CompaniesList(props) {
    const { companies } = props

    return (
        <Paper className={styles.paper} data-testid="companies-list">
            {companies.map(c => (
                <CompanyCard key={c.id} company={c} />
            ))}
        </Paper>
    )
}

CompaniesList.propTypes = {
    companies: PropTypes.array.isRequired
}