import React from "react";
import data from "./data.json"

function App() {

  function showDetails(id) {
    let details = document.getElementById(id)
    details.style.display = "block"
  }

  function hideDetails(id) {
    let details = document.getElementById(id)
    details.style.display = "none"
  }

  let max = 0
  for (let x = 0; x < data.length; x++) {
    if (data[x].amount > max) {
      max = data[x].amount
    }
  }
  console.log(max)

  let bars = data.map((i, index) => {
    let detailsId = "details-" + index
    let percentage = Math.floor((i.amount / max) * 100)
    let highest = false
    if (i.amount === max) {
      highest = true
    }
    return (
      <div className="bar" style={{height: percentage + "%", backgroundColor : highest? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"}} onMouseOver={() => showDetails(detailsId)} onMouseOut={()=> hideDetails(detailsId)}>
        <p className="bar-text">{i.day}</p>
        <div className="bar-details" id={detailsId}>${i.amount}</div>
      </div>
    )
  })
  return(
    <div className="main-div">
      <div className="chart-div">
        <div className="chart-top-div">
          <div>
            <p>My balance</p>
            <p style={{fontSize: "1.3em", fontWeight: "bold", letterSpacing: "1px"}}>$921.48</p>
          </div>
          <div className="circle-div">
            <div className="circle-one"></div>
            <div className="circle-two"></div>
          </div>
        </div>

        <div className="chart-main-div">
          <p style={{fontWeight: "bold", fontSize: "1.4em"}}>Spending - Last 7 days</p>
          <div className="chart">
              {bars}
          </div>
          <div className="line-break"></div>
          <div className="summary-div">
            <div>
              <p>Total this month</p>
              <p style={{fontWeight: "bold", fontSize: "2em"}}>$100</p>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
              <p style={{fontWeight: "bold"}}>+2.4%</p>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
