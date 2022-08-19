import { useState } from "react"
import PropTypes from "prop-types"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"

import styles from "../styles/SearchField.module.css"


export default function SearchField(props) {
    const { getCompanies, isLoading } = props
    const [search, setSearch] = useState("")

    const startSearch = async () => {
        getCompanies(search)
    }

    const onMouseDown = e => {
        if (e.key === "Enter" || e.keyCode === 13) startSearch()
    }

    const onChange = e => {
        setSearch(e.target.value)
    }

    return (
        <Box className={styles.box} data-testid="search-container">
            <TextField
                className={styles.textField}
                sx={{ marginRight: "10px" }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                placeholder="Zoeken..."
                variant="outlined"
                value={search}
                onKeyDown={onMouseDown}
                onChange={onChange}
                disabled={isLoading}
                fullWidth
                data-testid="search-field"
            />

            <Button
                className={styles.button}
                variant="contained"
                size="large"
                onClick={startSearch}
                disabled={isLoading}
                data-testid="search-button"
            >
                Zoeken
            </Button>
        </Box>
    )
}

SearchField.propTypes = {
    getCompanies: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}