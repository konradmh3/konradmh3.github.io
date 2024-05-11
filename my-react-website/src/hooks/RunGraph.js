import "../style/RunGraph.css";
import GetStravaStats from "./GetStravaStats";

const RunGraph = () => {
  const xPositions = Array(30).fill(null);
  // console.log(xPositions);

  const data = GetStravaStats();
  // const miles = data.Miles;
  // const totalRuns = data.TotalRuns;
  // const activities = data.Activities;
  // UNCOMMENT THE ABOVE LINES WHEN THE DONE DEVING HOOK IS FINISHED
  //  GETTING TO MANY REQ ERROR ALSO FIGURE OUT A WAY TO JUST CALL THIS ONCE AND STORE THE DATA IN A VARIABLE
  // THEN SEPERATE THE DATA INTO MILES, TOTALRUNS, AND ACTIVITIES

  // all activities are stored in the activities array, each activity is an object with name, distance, and date, epoch date and days ago
  // we can now use this for our svg graph
  const getTMR = () => {
    let nowEpoch = Math.floor(Date.now() / 1000);
    console.log(nowEpoch);
    let now = new Date();
    console.log(now);
    let minsThroughDay =
      now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
    let percentThroughDay = 1 - minsThroughDay / 1440;
    let additionalTime = 86400 * percentThroughDay;
    let tmr = nowEpoch + additionalTime;
    console.log(tmr);
    return tmr;
  };

  const addDaysAgo = () => {
    let tmr = getTMR();
    data.Activities.forEach((activity) => {
      let daysAgo = Math.floor((tmr - activity.dateEpoch) / 86400);
      activity.daysAgo = daysAgo;
      //   Finally add the distance to the xPositions array so we can show it on the graph!
      //realized that the above line doesnt account for multiple runs on the same day so to fix
      // lets check if point in array is null if it is then add the distance to it and if its not then add the distance to the existing distance
      if (xPositions[daysAgo] === null || xPositions[daysAgo] === undefined) {
        xPositions[daysAgo] = ((activity.distance / 20) * 100).toString() + "%";
      } else {
        let newDistance = (activity.distance / 20) * 100 + parseInt(xPositions[daysAgo].slice(0, -1));
        // rewrite the above line wwithout using slice
        xPositions[daysAgo] = newDistance.toString() + "%";
      }
    });
  };

  addDaysAgo();

  return (
    <svg className="graphContainerSVG" width="80%" height="80%">      
      
      {/* 5 miles Line */}
      <line
        x1="0"
        y1="25%"
        x2="99%"
        y2="25%"
        stroke="grey"
        strokeWidth={1}
        />
        <text className="mileTextScaling" x="100%" y="-25%" fill="black">5</text>
      {/* 10 miles Line */}
      <line
        x1="0"
        y1="50%"
        x2="99%"
        y2="50%"
        stroke="grey"
        strokeWidth={1}
        />
        <text className="mileTextScaling" x="100%" y="-50%" fill="black">10</text>
      {/* 15 miles Line */}
      <line
        x1="0"
        y1="75%"
        x2="99%"
        y2="75%"
        stroke="grey"
        strokeWidth={1}
        />
        <text className="mileTextScaling" x="100%" y="-75%" fill="black">15</text>
        {/* 20 mile line */}
        <line
        x1="0"
        y1="100%"
        x2="99%"
        y2="100%"
        stroke="grey"
        strokeWidth={1}
        />
        <text className="mileTextScaling" x="100%" y="-100%" fill="black">20</text>
      {/* Y Axis */}
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="100%"
        stroke="black"
        strokeLinecap="round"
        strokeWidth="4"
      />
      
      {/* X Axis */}
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke="black"
        strokeLinecap="round"
        strokeWidth="4"
      />
      
      {/* the below line components represent the miles ran on graph */}
      
      <line
        x1="3.3%"
        y1="0"
        x2="3.3%"
        y2={xPositions[29]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="6.6%"
        y1="0"
        x2="6.6%"
        y2={xPositions[28]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="9.9%"
        y1="0"
        x2="9.9%"
        y2={xPositions[27]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="13.2%"
        y1="0"
        x2="13.2%"
        y2={xPositions[26]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="16.5%"
        y1="0"
        x2="16.5%"
        y2={xPositions[25]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="19.8%"
        y1="0"
        x2="19.8%"
        y2={xPositions[24]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="23.1%"
        y1="0"
        x2="23.1%"
        y2={xPositions[23]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="26.4%"
        y1="0"
        x2="26.4%"
        y2={xPositions[22]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="29.7%"
        y1="0"
        x2="29.7%"
        y2={xPositions[21]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="33%"
        y1="0"
        x2="33%"
        y2={xPositions[20]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="36.3%"
        y1="0"
        x2="36.3%"
        y2={xPositions[19]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="39.6%"
        y1="0"
        x2="39.6%"
        y2={xPositions[18]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="42.9%"
        y1="0"
        x2="42.9%"
        y2={xPositions[17]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="46.2%"
        y1="0"
        x2="46.2%"
        y2={xPositions[16]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="49.5%"
        y1="0"
        x2="49.5%"
        y2={xPositions[15]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="52.8%"
        y1="0"
        x2="52.8%"
        y2={xPositions[14]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="56.1%"
        y1="0"
        x2="56.1%"
        y2={xPositions[13]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="59.4%"
        y1="0"
        x2="59.4%"
        y2={xPositions[12]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="62.7%"
        y1="0"
        x2="62.7%"
        y2={xPositions[11]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="66%"
        y1="0"
        x2="66%"
        y2={xPositions[10]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="69.3%"
        y1="0"
        x2="69.3%"
        y2={xPositions[9]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="72.6%"
        y1="0"
        x2="72.6%"
        y2={xPositions[8]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="75.9%"
        y1="0"
        x2="75.9%"
        y2={xPositions[7]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="79.2%"
        y1="0"
        x2="79.2%"
        y2={xPositions[6]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="82.5%"
        y1="0"
        x2="82.5%"
        y2={xPositions[5]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="85.8%"
        y1="0"
        x2="85.8%"
        y2={xPositions[4]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="89.1%"
        y1="0"
        x2="89.1%"
        y2={xPositions[3]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="92.4%"
        y1="0"
        x2="92.4%"
        y2={xPositions[2]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="95.7%"
        y1="0"
        x2="95.7%"
        y2={xPositions[1]}
        stroke="black"
        strokeWidth="1%"
      />
      <line
        x1="99%"
        y1="0"
        x2="99%"
        y2={xPositions[0]}
        stroke="black"
        strokeWidth="1%"
      />
    </svg>
  );
};

export default RunGraph;
