import React from "react";

const Index = ({flight}) => {
  // console.log(pokemon)
  return(
    <div>
      <div>
        <h1>Flight Log</h1>
        {/* //*After commenting out everything under h1, it seems to be an issue with my map, may need a key or this, not sure   */}
        <ul>
          {flight.map((flightlog, i) => {
          return (
            <div key={i}>
              <a href={`/flightinfo/show/${flightlog.airline}`}><br/>{flightlog.flightNo}<br/>{flightlog.departs}</a>
            </div>
          )})}
        </ul>
      </div>
    </div>
  )
}

module.exports = Index;

