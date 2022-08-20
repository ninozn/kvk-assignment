import { render, screen } from "@testing-library/react"
import CompaniesList from "../components/CompaniesList"

const companies = [{
    "id": "1",
    "name": "Wintheiser Group",
    "city": "West Esteban",
    "zipCode": "97018",
    "streetName": "Lilly View",
    "logo": "https://via.placeholder.com/150",
    "createdAt": "2021-07-16T19:41:28.272Z"
},
{
    "id": "2",
    "name": "Feest, Schinner and Lowe",
    "city": "New Ahmad",
    "zipCode": "07811",
    "streetName": "Bartell Tunnel",
    "logo": "https://via.placeholder.com/150",
    "createdAt": "2021-10-03T18:37:01.931Z"
}]

test("should render CompaniesList correctly", () => {
    render(< CompaniesList companies={[]} />)

    const companiesList = screen.getByTestId("companies-list")

    expect(companiesList).toBeInTheDocument()
})

test("should show no companies found message if no companies are available", () => {
    render(< CompaniesList companies={[]} />)

    const companiesFoundMessage = screen.getByTestId("no-companies-found")

    expect(companiesFoundMessage).toBeInTheDocument()
})

test("should show spinner if isLoading", () => {
    render(< CompaniesList companies={[]} isLoading={true} />)

    const spinner = screen.getByTestId("loading-companies")

    expect(spinner).toBeInTheDocument()
})

test("should show companies if companies are available", async () => {
    const test = render(< CompaniesList companies={companies} isLoading={false} />)

    companies.forEach(company => {
        expect(screen.getByText(company.name)).toBeInTheDocument()
    })
})