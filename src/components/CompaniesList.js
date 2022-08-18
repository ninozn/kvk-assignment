import PropTypes from 'prop-types';
import CompanyCard from './CompanyCard';
import Grid from '@mui/material/Grid';

export default function CompaniesList(props) {
    const { companies } = props

    return (
        <Grid container fixed spacing={2}>
            {companies.map(c => (
                <Grid key={c.id} item xs={12}>
                    <CompanyCard company={c} />
                </Grid>
            ))}
        </Grid>
    )
}

CompaniesList.propTypes = {
    companies: PropTypes.array.isRequired
}