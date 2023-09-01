import React from "react";

const New = () => {
  return(
    <div>
      <div>
        <h1>Add A Flight</h1>
          <form action='/flightinfo' method="POST">
            {/* Dropdown Select */}
            <label for="airlineDropdown">Choose Airline (Dropdown):</label>
            <select id="airlineDropdown" name="airlineDropdown">
              <option value="american">American</option>
              <option value="southwest">Southwest</option>
              <option value="united">United</option> <br/>
              </select>
            Flight Number: <input type="number" name="flightNo" /><br/>
            Departs: <input type='datetime-local' name='departs'></input><br/>
            <input type="submit" name="" value="Add Flight" />
          </form>
      </div>
    </div>
  )
}

module.exports = New; 