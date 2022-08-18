import PropTypes from 'prop-types';
import CompanyCard from './CompanyCard';
import Paper from '@mui/material/Paper';

export default function CompaniesList(props) {
    const { companies } = props

    return (
        <Paper sx={{ overflow: 'auto', marginTop: '20px', padding: '0 20px', border: 'solid 1px rgba(0, 0, 0, 0.23)' }} data-testid="companies-list">
            {companies.map(c => (
                <CompanyCard key={c.id} company={c} />
            ))}
        </Paper>
    )
}

CompaniesList.propTypes = {
    companies: PropTypes.array.isRequired
}