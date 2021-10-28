import React from "react";
import "./Table.css";
import { useState } from "react";

export default function Table() {
  const [teams, setTeams] = useState([]);
  const [selected, setSelected]= useState();

  const teamSelection =[
    {
      team: ["Colts", "Titans"],
      id:1, 
    },
    {
      team: ["Falcons", "Giants"],
      id:2, 
    },
    {
      team: ["Chargers", "Rams"],
      id:3, 
    },
    {
      team: ["Patriots", "Chiefs"],
      id:4, 
    },
  ]
  function onClick() {
    alert("you selected this team");
    console.log('you clicked?')
    // handleSelected();
  }
  const handleSelected = (id) => {
    if (selected.includes(id)) {
      setSelected(prevSelected => prevSelected.filter((s) => s !== id));
      console.log(id)
    } else { 
      setSelected(prevSelected => ([...prevSelected, id]));
      console.log(id)
    }
  };

  // login auth
  // need to create a list of the selected teams
  // lock teams after the submit button is pressed
  // let selected = 0;

  //     const selectTeam = (e) => {
  //         e.preventDefault();

  //         selected += 1
  //       console.log(`hello `)
  //     }
  //     const handleSubmit = (e) => {
  //         e.preventDefault();

  //     }
  return (
    <div>
      <br /> <br />
      {/* <div>
        <button id="1" onClick={onClick}>{teamSelection.team1[0]}</button> vs{" "}
        <button id="2" onClick={onClick}>{teamSelection.team1[1]}</button>{" "}
          {teams}
      </div> 
      <div>
        <button onClick={onClick}>{teamSelection.team2[0]}</button> vs{" "}
        <button onClick={onClick}>{teamSelection.team2[1]}</button>{" "}
      </div>
      <div>
        <button onClick={onClick}>{teamSelection.team3[0]}</button> vs{" "}
        <button onClick={onClick}>{teamSelection.team3[1]}</button>{" "}
      </div>
      <div>
        <button onClick={onClick}>{teamSelection.team4[0]}</button> vs{" "}
        <button onClick={onClick}>{teamSelection.team4[1]}</button>{" "}
      </div> */}
      {teamSelection.map((team)=>{
        return (
          <div className="col-6"><button onClick={onClick}>{team.team[0]}</button> vs <button>{team.team[1]}</button> </div>
        )
        

      })}
    </div>
    //         <div>
    //             <p className="week">Week 3 Selected {selected}</p>
    //       <div className="container ">
    //       <div className="row g-2">
    //       <div className="col-6">
    //         <div className="p-3 border bg-light" id="1" onClick={selectTeam}>Colts
    //         </div><input type="checkbox"/>
    //       </div>
    //       <div className="col-6">
    //         <div className="p-3 border bg-light" id="2" onClick={selectTeam} >Titans
    //     </div><input type="checkbox"/>
    //       </div>
    //       <div className="col-6">
    //         <div className="p-3 border bg-light" id="3" onClick={selectTeam}>Falcons</div>
    //         <input type="checkbox"/>
    //       </div>
    //       <div className="col-6">
    //       <div className="p-3 border bg-light" id="4" onClick={selectTeam}>Giants</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="5" onClick={selectTeam}>Chargers</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="6" onClick={selectTeam}>Chiefs</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="7" onClick={selectTeam}>Bengals</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="8" onClick={selectTeam}>Steelers</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="9" onClick={selectTeam}>Bears</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="10" onClick={selectTeam}>Browns</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="11" onClick={selectTeam}>Ravens</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light"id="12" onClick={selectTeam}>Lions</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="13" onClick={selectTeam}>Saints</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="14" onClick={selectTeam}>Patriots</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="15" onClick={selectTeam}>Cardinals</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="16" onClick={selectTeam}>Jaguars</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="17" onClick={selectTeam}>Washington</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="18" onClick={selectTeam}>Bills</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="19" onClick={selectTeam}>Jets</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="20" onClick={selectTeam}>Broncos</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="21" onClick={selectTeam}>Dolphins</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="22" onClick={selectTeam}>Raiders</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="23" onClick={selectTeam}>Seahawks</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="24" onClick={selectTeam}>Vikings</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="25" onClick={selectTeam}>Buccaneers</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="26" onClick={selectTeam}>Rams</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="27" onClick={selectTeam}>Packers</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="28" onClick={selectTeam}>49ers</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <h2>Monday Night</h2>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="29" onClick={selectTeam}>Eagles</div>
    //       <input type="checkbox"/>
    //     </div>
    //     <div className="col-6">
    //       <div className="p-3 border bg-light" id="30" onClick={selectTeam}>Cowboys</div>
    //       <input type="checkbox"/>
    //     </div>
    //   </div>

    // </div>
    // <button type="submit" onClick={handleSubmit} >SUBMIT</button>
    // <br />

    //         </div>
  );
}
