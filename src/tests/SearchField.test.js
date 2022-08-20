import { render, screen, fireEvent, delay } from "@testing-library/react"
import SearchField from "../components/SearchField"
import axios from "axios"

const mockGetCompanies = jest.fn()

test("should render Search correctly", () => {
    render(< SearchField />)

    const searchContainer = screen.getByTestId("search-container")
    const searchField = screen.getByTestId("search-field")
    const searchButton = screen.getByTestId("search-button")

    expect(searchContainer).toBeInTheDocument()
    expect(searchField).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
    expect(searchButton).toHaveTextContent(/Zoeken/)
})

test("should get companies on enter keyDown", async () => {
    render(< SearchField getCompanies={mockGetCompanies} />)

    const input = screen.getByTestId("search-field").querySelector("input")

    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 })
    expect(mockGetCompanies).toHaveBeenCalledTimes(1)
})

test("should execute call on button press", () => {
    render(< SearchField getCompanies={mockGetCompanies} />)

    const button = screen.getByTestId("search-button")

    fireEvent.click(button)
    expect(mockGetCompanies).toHaveBeenCalledTimes(1)
})