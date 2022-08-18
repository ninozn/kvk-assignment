import TextField from "@mui/material/TextField"
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';

export default function SearchField() {
    const startSearch = () => {
        console.log('START SEARCH')
    }

    const onMouseDown = e => {
        if (e.key === 'Enter' || e.keyCode === 13) startSearch()
    }

    return (
        <Grid container fixed spacing={2}>
            <Grid item xs={10}>
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">

                                <SearchIcon onClick={startSearch} />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Zoeken..."
                    variant="outlined"
                    onKeyDown={onMouseDown}
                    fullWidth
                />
            </Grid>

            <Grid item xs={2}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={startSearch}
                    xs={{ height: "100%" }}
                >
                    Zoeken
                </Button>
            </Grid>
        </Grid>
    )
}