import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function CompanyCard(props) {
    const { company } = props

    const getCompanyDetails = () => {
        console.log("GET DETAILS")
    }

    return (
        <Card sx={{ display: 'flex', cursor: 'pointer' }} onClick={getCompanyDetails}>
            <CardMedia
                component="img"
                sx={{ width: 120 }}
                image={company.logo}
                alt={`${company.name} logo`}
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                    <Typography component="div" variant="h5">
                        {company.name}

                    </Typography>

                    {company.streetName} <br />
                    {`${company.zipCode} ${company.city}`}
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small">Meer info</Button>
            </CardActions>
        </Card>
    )
}

CompanyCard.propTypes = {
    company: PropTypes.object.isRequired
}