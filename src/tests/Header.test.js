import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

test("sould render Header correctly", () => {
    render(< Header />)

    const header = screen.getByTestId("header")

    expect(header).toHaveTextContent(/Kompany handelsregister/)
})