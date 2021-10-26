import React from 'react'

export default function Form(team, setTeam) {
    return (
        <div>
            <button type="submit" className="btn btn-secondary" onClick={setTeam}>Colts</button>
          <input type="checkbox"/>
          <button type="submit" className="btn btn-secondary" onClick={setTeam}>Seahawks</button>
          <input type="checkbox"/>
        </div>
    )
}
