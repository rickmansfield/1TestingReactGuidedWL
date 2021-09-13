import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MissionForm from './MissionForm';

test("renders without errors", ()=> {
    render(<MissionForm/>);
});


test("Displays message if isFetchingData is true", ()=> {

    render(<MissionForm isFetchingData={true}/>);

    //Arrange:
    //1. Attempt to find message
    const message = screen.queryByText(/we are fetching data/i);
    //2. Attempt to find button
    const button = screen.queryByRole("button");
    
    //Assert:
    //1. expect message to exist.
    expect(message).toBeInTheDocument();
    //extras or alternatives
    // expect(message).toBeTruthy();
    // expect(message).not.toBeFalsy();
    // expect(message).toHaveTextContent('we are fetching data');
    // expect(message).not.toBeNull();

    //2. expect button NOT to exist.
    expect(button).not.toBeInTheDocument();
});

test("Displays button if isFetchingData is false", ()=> {
    render(<MissionForm isFetchingData={false}/>);

    const message = screen.queryByText(/we are fetching data/i);
    const button = screen.queryByRole("button");

    expect(message).not.toBeInTheDocument();
    expect(button).toBeInTheDocument();
});

test("Executes getData if button is clicked", ()=> {
    // const fakeFunction = ()=> {
    //     console.log("fake function engaged");
    // }
    const fakeGetData = jest.fn();

    //Arrange: Setup our component code.
    render(<MissionForm isFetchingData={false} />);
    //Act:
    // - Get our button
    const button = screen.queryByRole("button");

    // - Click our button
    userEvent.click(button);
    console.log('MissionForm.tes.js fakeGetData = jset.fn()', fakeGetData.mock);

    //Assert
    // - Does our getData function execute
    // expect(fakeGetData.mock.results.length === 1).toBeTruthy();
    // expect(fakeGetData.mock.results.length).toBe(1);
    // expect(fakeGetData.mock.results).toHaveLength(1);
    // expect(fakeGetData).toBeCalledTimes(1);
});