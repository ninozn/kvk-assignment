import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';
import SearchField from '../components/SearchField';

test('renders App correctly', () => {
    render( < App / > );

    const header = screen.getByTestId('header')
    const companiesList = screen.getByTestId('companies-list')
    const searchContainer = screen.getByTestId('search-container')
    const searchField = screen.getByTestId('search-field')
    const searchButton = screen.getByTestId('search-button')

    expect(header).toBeInTheDocument()
    expect(companiesList).toBeInTheDocument()
    expect(searchContainer).toBeInTheDocument()
    expect(searchField).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
});

test('renders Header correctly', () => {
    render( < Header / > );

    const header = screen.getByTestId('header')

    expect(header).toHaveTextContent(/Kompany handelsregister/)
});

test('renders Search correctly', () => {
    render( < SearchField / > );

    const searchContainer = screen.getByTestId('search-container')
    const searchField = screen.getByTestId('search-field')
    const searchButton = screen.getByTestId('search-button')

    expect(searchContainer).toBeInTheDocument()
    expect(searchField).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
    expect(searchButton).toHaveTextContent(/Zoeken/)

});