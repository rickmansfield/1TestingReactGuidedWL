import React from "react";

const MissionForm = props => {
  
  const handleGetData = e => {
    e.preventDefault();
    console.log('MissionForm.js ln:4 props', props);
    props.getData();
  };

  return (
    <div id="missionForm">
      {props.isFetchingData ? (
        <div>we are fetching data</div>
      ) : (
        <button onClick={handleGetData}>Get Data</button>
      )}
    </div>
  );
};

export default MissionForm;
