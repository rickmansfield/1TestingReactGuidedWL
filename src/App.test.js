import React from 'react';
import { screen, render, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import { fetchMissions } from './api/fetchMissions';
jest.mock('./api/fetchMissions');

test("renders without errors", ()=> {
    render(<App/>);
});

test("when button is clicked, gets missions", async ()=> {
    fetchMissions.mockResolvedValueOnce({
        data:[
            {
                mission_id: "1",
                mission_name: "Mission 1"
            },
            {
                mission_id: "2",
                mission_name: "Mission 2"
            },
            {
                mission_id: "3",
                mission_name: "Mission 3"
            }
        ]
    });

    //Arrange:
    render(<App/>);

    //Act:
    const missionForm = document.querySelector('#missionForm');

    const button = within(missionForm).getByRole("button");
    userEvent.click(button);


    //Assert:
    // const missionPromise = screen.findAllByTestId("mission");
    // missionPromise.then(missions => {
    //     console.log(missions);
    //      return(missions[0])
    // }).then(mission => {
        //return(mission.mission_id);
    //}).then(id=>{
        //return(id);
    //}).catch()

    const missions = await screen.findAllByTestId("mission");
    expect(missions).toHaveLength(3);
});

test("test for dom access methods", ()=> {
    render(<App/>);
    const header = document.querySelector("#mainHeader");
    expect(header).toBeInTheDocument();

    const li = document.querySelectorAll('li');
    expect(li).toHaveLength(2);
})