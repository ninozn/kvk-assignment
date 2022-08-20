import { render, screen } from "@testing-library/react"
import App from "../App"

test("should render App correctly", () => {
    render(< App />)

    const header = screen.getByTestId("header")
    const companiesList = screen.getByTestId("companies-list")
    const searchContainer = screen.getByTestId("search-container")
    const searchField = screen.getByTestId("search-field")
    const searchButton = screen.getByTestId("search-button")

    expect(header).toBeInTheDocument()
    expect(companiesList).toBeInTheDocument()
    expect(searchContainer).toBeInTheDocument()
    expect(searchField).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
})