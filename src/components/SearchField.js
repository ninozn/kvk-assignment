import TextField from "@mui/material/TextField"
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

export default function SearchField() {
    const startSearch = () => {
        console.log('START SEARCH')
    }

    const onMouseDown = e => {
        if (e.key === 'Enter' || e.keyCode === 13) startSearch()
    }

    return (
        <Box sx={{ display: 'flex' }} data-testid="search-container">
            <TextField
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon onClick={startSearch} />
                        </InputAdornment>
                    ),
                }}
                sx={{ marginRight: "10px", background: '#ffffff' }}
                placeholder="Zoeken..."
                variant="outlined"
                onKeyDown={onMouseDown}
                fullWidth
                data-testid="search-field"
            />

            <Button
                variant="contained"
                size="large"
                onClick={startSearch}
                xs={{ height: "100%" }}
                data-testid="search-button"
            >
                Zoeken
            </Button>
        </Box>
    )
}