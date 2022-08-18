import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

import styles from "../styles/SearchField.module.css"


export default function SearchField() {
    const startSearch = () => {
        console.log("START SEARCH")
    }

    const onMouseDown = e => {
        if (e.key === "Enter" || e.keyCode === 13) startSearch()
    }

    return (
        <Box className={styles.box} data-testid="search-container">
            <TextField
                className={styles.textField}
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
                data-testid="search-field"
            />

            <Button
                className={styles.button}
                variant="contained"
                size="large"
                onClick={startSearch}
                data-testid="search-button"
            >
                Zoeken
            </Button>
        </Box>
    )
}