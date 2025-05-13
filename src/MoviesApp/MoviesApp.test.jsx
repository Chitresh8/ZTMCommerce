import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import { MoviesApp } from './MoviesApp';

describe("MoviesApp component", ()=>{
    test('renders heading and input',()=>{
        render(<MoviesApp/>);
        expect(screen.getByText('🎬 Movies Watchlist App')).toBeInTheDocument();
        expect (screen.getByPlaceholderText('Enter Movie Name')).toBeInTheDocument();
        screen.debug();
        expect (screen.getByText('Add to Watchlist')).toBeInTheDocument();
    });
    test('shows error when adding empty movie',()=>{
        render(<MoviesApp/>);
        fireEvent.click(screen.getByText('Add to Watchlist'));
        screen.debug();
        expect(screen.getByText('Movie Name cannot be empty')).toBeInTheDocument();
    });
    test('adds a movie to the list',()=>{
        render(<MoviesApp/>);
        const input=screen.getByPlaceholderText('Enter Movie Name');
        fireEvent.change(input,{target:{value:'Inception'}});
        fireEvent.click(screen.getByText("Add to Watchlist"));
        screen.debug();
        expect(screen.getByText('Inception')).toBeInTheDocument();
    });
    test('prevents adding duplicate movies',()=>{
        render(<MoviesApp/>);
        const input=screen.getByPlaceholderText('Enter Movie Name');
        fireEvent.change(input,{target:{value:'Inception'}});
        fireEvent.click(screen.getByText("Add to Watchlist"));
        screen.debug();
        fireEvent.change(input,{target:{value:'inception'}}); //lowercased
        fireEvent.click(screen.getByText("Add to Watchlist"));
        screen.debug();
        expect(screen.getByText('Movie Name already exists...!')).toBeInTheDocument();
    });
    test('deletes a movie from the list',()=>{
        render(<MoviesApp/>);
        const input= screen.getByPlaceholderText('Enter Movie Name');
        fireEvent.change(input,{target:{value:'Inception'}});
        fireEvent.click(screen.getByText("Add to Watchlist"));
        screen.debug();
        // const deleteButton=screen.getByText('Delete');
        // fireEvent.click(deleteButton);
        fireEvent.click(screen.getByText('Delete'));
        screen.debug();
        expect(screen.queryByText('Inception')).not.toBeInTheDocument();
    });
    test('toggle watched status',()=>{
        render(<MoviesApp/>);
        const input = screen.getByPlaceholderText("Enter Movie Name");
        fireEvent.change(input,{target:{value:'Inception'}});
        fireEvent.click(screen.getByText("Add to Watchlist"));
        screen.debug();
        const toggleButton=screen.getByText("Watched");
        fireEvent.click(toggleButton);
        screen.debug();
        expect(screen.getByText('Inception')).toHaveProperty('tagName', 'DEL');
        fireEvent.click(screen.getByText('Unwatched'));
        screen.debug();
        expect(screen.getByText('Inception')).not.toContainHTML('del');
    });
});