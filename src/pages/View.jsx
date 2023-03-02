import '../App.css';
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
const View = () => {
  const [pit, setPit] = useState([]);
  const [stand, setStand] = useState([]);
  const team = sessionStorage.getItem("teamView");
  const teamName = sessionStorage.getItem("teamViewName");
  const type = sessionStorage.getItem("teamViewType");
  useEffect(() => {
  fetch("https://api.npoint.io/6f69d7222ca8055e26a3")
  .then((response) => response.json())
  .then((data) => setStand(data));
  fetch("https://api.npoint.io/698acdf3953b4aa061b6")
  .then((response) => response.json())
  .then((data) => setPit(data));
}, []);
  let count = 0;
  return (
    <body>
      <Link to="/analytics" style={{marginLeft: "15px"}}>&larr; Back</Link><br></br>
      <h1>#{team}:  {teamName}</h1>
    {(type == "stand")?(<div>{(stand).map(({gi1, gi2, gi3, gi4, gi5, gi6, gi7, gi8, gi9, gi10, gi11, gi12, gi13, gi14, gi15, gi16, gi17, gi18, gi19a, gi19b, gi20a, gi20b, gi21a, gi21b, gi22a, gi22b, gi23a, gi23b, gi24a, gi24b, gi25a , gi25b, gi26a, gi26b, gi27a, gi27b, low, mid, high, csPos, notes, cycles, csState, teamName, cycleTime, teamNumber, story, autoncs}) => {
      if(team == teamNumber){
        count++;
        return(
      <div>
        <h3>Dataset {count}:</h3>
        {autoncs} on charging station in auton<br></br>{high} high placements<br></br>{mid} mid placements<br></br>{low} low placements<br></br>{cycles} cycles<br></br>{cycleTime} seconds per cycle on average<br></br>{csState.substring(0,1).toUpperCase() + csState.substring(1)} on charging station in {csPos} position<br></br>Notes: "{notes}"<br></br>Scoring time chart: <br></br><table style={{border: "1px solid black"}}>
          
        <tr>
        <td style={{backgroundColor: (gi1>0 && gi1<=15)?("#90EE90"):((gi1==-1)?("#000000"):(""))}}>{(gi1 != -1)?(gi1):("N/A")}</td>
          <td style={{backgroundColor: (gi2>0 && gi2<=15)?("#90EE90"):((gi2==-1)?("#000000"):(""))}}>{(gi2 != -1)?(gi2):("N/A")}</td>
          <td style={{backgroundColor: (gi3>0 && gi3<=15)?("#90EE90"):((gi3==-1)?("#000000"):(""))}}>{(gi3 != -1)?(gi3):("N/A")}</td>
          <td  style={{backgroundColor: (gi4>0 && gi4<=15)?("#90EE90"):((gi4==-1)?("#000000"):(""))}}>{(gi4 != -1)?(gi4):("N/A")}</td>
          <td  style={{backgroundColor: (gi5>0 && gi5<=15)?("#90EE90"):((gi5==-1)?("#000000"):(""))}}>{(gi5 != -1)?(gi5):("N/A")}</td>
          <td  style={{backgroundColor: (gi6>0 && gi6<=15)?("#90EE90"):((gi6==-1)?("#000000"):(""))}}>{(gi6 != -1)?(gi6):("N/A")}</td>
          <td  style={{backgroundColor: (gi7>0 && gi7<=15)?("#90EE90"):((gi7==-1)?("#000000"):(""))}}>{(gi7 != -1)?(gi7):("N/A")}</td>
          <td  style={{backgroundColor: (gi8>0 && gi8<=15)?("#90EE90"):((gi8==-1)?("#000000"):(""))}}>{(gi8 != -1)?(gi8):("N/A")}</td>
          <td  style={{backgroundColor: (gi9>0 && gi9<=15)?("#90EE90"):((gi9==-1)?("#000000"):(""))}}>{(gi9 != -1)?(gi9):("N/A")}</td>
        </tr>
          <tr>
         <td  style={{backgroundColor: (gi10>0 && gi10<=15)?("#90EE90"):((gi10==-1)?("#000000"):(""))}}>{(gi10 != -1)?(gi10):("N/A")}</td>
          <td  style={{backgroundColor: (gi11>0 && gi11<=15)?("#90EE90"):((gi11==-1)?("#000000"):(""))}}>{(gi11 != -1)?(gi11):("N/A")}</td>
          <td style={{backgroundColor: (gi12>0 && gi12<=15)?("#90EE90"):((gi12==-1)?("#000000"):(""))}}>{(gi12 != -1)?(gi12):("N/A")}</td>
          <td style={{backgroundColor: (gi13>0 && gi13<=15)?("#90EE90"):((gi13==-1)?("#000000"):(""))}}>{(gi13 != -1)?(gi13):("N/A")}</td>
          <td style={{backgroundColor: (gi14>0 && gi14<=15)?("#90EE90"):((gi14==-1)?("#000000"):(""))}}>{(gi14 != -1)?(gi14):("N/A")}</td>
          <td style={{backgroundColor: (gi15>0 && gi15<=15)?("#90EE90"):((gi15==-1)?("#000000"):(""))}}>{(gi15 != -1)?(gi15):("N/A")}</td>
          <td style={{backgroundColor: (gi16>0 && gi16<=15)?("#90EE90"):((gi16==-1)?("#000000"):(""))}}>{(gi16 != -1)?(gi16):("N/A")}</td>
          <td style={{backgroundColor: (gi17>0 && gi17<=15)?("#90EE90"):((gi17==-1)?("#000000"):(""))}}>{(gi17 != -1)?(gi17):("N/A")}</td>
          <td style={{backgroundColor: (gi18>0 && gi18<=15)?("#90EE90"):((gi18==-1)?("#000000"):(""))}}>{(gi18 != -1)?(gi18):("N/A")}</td>
        </tr>
          <tr>
         <td style={{backgroundColor: ((gi19a>0 && gi19a<=15) || (gi19b>0 && gi19b<=15))?("#90EE90"):((gi19a==-1 && gi19b==-1)?("#000000"):(""))}}>{(gi19a != -1)?(gi19a):((gi19b != -1)?(gi19b):("N/A"))}</td>
         <td style={{backgroundColor: ((gi20a>0 && gi20a<=15) || (gi20b>0 && gi20b<=15))?("#90EE90"):((gi20a==-1 && gi20b==-1)?("#000000"):(""))}}>{(gi20a != -1)?(gi20a):((gi20b != -1)?(gi20b):("N/A"))}</td>
         <td style={{backgroundColor: ((gi21a>0 && gi21a<=15) || (gi21b>0 && gi21b<=15))?("#90EE90"):((gi21a==-1 && gi21b==-1)?("#000000"):(""))}}>{(gi21a != -1)?(gi21a):((gi21b != -1)?(g21b):("N/A"))}</td>
         <td style={{backgroundColor: ((gi22a>0 && gi22a<=15) || (gi22b>0 && gi22b<=15))?("#90EE90"):((gi22a==-1 && gi22b==-1)?("#000000"):(""))}}>{(gi22a != -1)?(gi22a):((gi22b != -1)?(gi22b):("N/A"))}</td>
         <td style={{backgroundColor: ((gi23a>0 && gi23a<=15) || (gi23b>0 && gi23b<=15))?("#90EE90"):((gi23a==-1 && gi23b==-1)?("#000000"):(""))}}>{(gi23a != -1)?(gi23a):((gi23b != -1)?(gi23b):("N/A"))}</td>
         <td style={{backgroundColor: ((gi24a>0 && gi24a<=15) || (gi24b>0 && gi24b<=15))?("#90EE90"):((gi24a==-1 && gi24b==-1)?("#000000"):(""))}}>{(gi24a != -1)?(gi24a):((gi24b != -1)?(gi24b):("N/A"))}</td>
         <td style={{backgroundColor: ((gi25a>0 && gi25a<=15) || (gi25b>0 && gi25b<=15))?("#90EE90"):((gi25a==-1 && gi25b==-1)?("#000000"):(""))}}>{(gi25a != -1)?(gi25a):((gi25b != -1)?(gi25b):("N/A"))}</td>
         <td style={{backgroundColor: ((gi26a>0 && gi26a<=15) || (gi26b>0 && gi26b<=15))?("#90EE90"):((gi26a==-1 && gi26b==-1)?("#000000"):(""))}}>{(gi26a != -1)?(gi26a):((gi26b != -1)?(gi26b):("N/A"))}</td>
         <td style={{backgroundColor: ((gi27a>0 && gi27a<=15) || (gi27b>0 && gi27b<=15))?("#90EE90"):((gi27a==-1 && gi27b==-1)?("#000000"):(""))}}>{(gi27a != -1)?(gi27a):((gi27b != -1)?(gi27b):("N/A"))}</td>
        </tr>
        </table>
        <br></br>
      </div>
        );
      }
    })}
      {(pit).map(({teamName, teamNumber, notes}) => {
      if(team == teamNumber){
        return(
      <div>
        <h3>Pit Scouting:</h3>
            Notes: <br></br>{notes.replace('<br></br>', "   ---   ")}<br></br>
      </div>
        );
      }
    })}<br></br></div>):(<div>{(pit).map(({teamName, teamNumber, notes}) => {
      if(team == teamNumber){
        return(
      <div>
        <h3>Pit Scouting:</h3>
            Notes: <br></br>{notes.replace('<br></br>', "   ---   ")}<br></br>
      </div>
        );
      }
    })}</div>)}
    </body>
  );
};

export default View;