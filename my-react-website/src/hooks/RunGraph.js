import "../style/RunGraph.css";
import GetStravaStats from "./GetStravaStats";


const RunGraph = (props) => {
  const yPosition = Array(30).fill(null);
  const data = GetStravaStats();
  const gridLines = [["25%", "-25%", "5"], ["50%", "-50%", "10"], ["75%", "-75%", "15"], ["100%", "-100%", "20"]];
  const distanceLines = Array(30).fill(null).map((_, index) => {
   return `${(index + 1) * 3.3}%`;
  //  the above line helps us create an array of 30 elements, each element is a string that represents a percentage of the svg width
  // this is better than hardcoding the values because it allows us to change the number of lines easily
  // the action of compressing the array of 30 elements into a string is called mapping
  });

  const getTMR = () => {
    let nowEpoch = Math.floor(Date.now() / 1000);
    let now = new Date();
    let minsThroughDay =
      now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;
    let percentThroughDay = 1 - minsThroughDay / 1440;
    let additionalTime = 86400 * percentThroughDay;
    let tmr = nowEpoch + additionalTime;
    return tmr;
  };

  const addDaysAgo = () => {
    let tmr = getTMR();
    data.Activities.forEach((activity) => {
      let daysAgo = Math.floor((tmr - activity.dateEpoch) / 86400);
      activity.daysAgo = daysAgo;
      if (yPosition[daysAgo] === null || yPosition[daysAgo] === undefined) {
        yPosition[daysAgo] = ((activity.distance / 20) * 100).toString() + "%";
      } else {
        let newDistance = (activity.distance / 20) * 100 + parseInt(yPosition[daysAgo].slice(0, -1));
        yPosition[daysAgo] = newDistance.toString() + "%";
      }
    });
    yPosition.reverse();
  };


  const handleMouseEnter = (e) => {
    e.target.style.stroke = "rgb(252,98,24, .25)";
    // console.log(e.target);
    //log the key of the line which is under fiberNode
    // console.log(e._targetInst.key);
    //console log the data object where the object.activity.daysAgo is equal to the key of the line
    // console.log(data.Activities.find((activity) => activity.daysAgo === parseInt(e._targetInst.key)));
    props.setSelectedRun(data.Activities.find((activity) => activity.daysAgo === parseInt(e._targetInst.key)));
  }

  const handleMouseLeave = (e) => {
    e.target.style.stroke = "rgba(256, 0, 0, 0)";
  }


  addDaysAgo();
  
  return (
    <svg className="graphContainerSVG" width="80%" height="80%">      
      {/* REACT FORLOOP */}
      {/* miles Line */}
      {gridLines.map((line) => (
          <line
            key={line}
            x1="0"
            y1={line[0]}
            x2="99%"
            y2={line[0]}
            stroke="grey"
            strokeWidth={1}
          />
        ))}
        {gridLines.map((line, index) => (
          <text key={index} className="mileTextScaling" x="100%" y={line[1]} fill="black">{line[2]}</text>
        ))}
    
      {distanceLines.map((line, index) => (
        <line
          key={29 - index + 30}
          x1={line}
          y1="0"
          x2={line}
          y2={yPosition[index]}
          stroke="rgb(252,82,0)"
          strokeWidth="1%"
        />
      ))}  
      {distanceLines.map((line, index) => (
        yPosition[index] !== null ? (
        <line
          key={29 - index}
          x1={line}
          y1="0%"
          x2={line}
          y2="100%"
          stroke="rgba(256, 0, 0, 0)"
          strokeWidth="3.3%"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        ) : null
      ))}

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
    </svg>
  );
};

export default RunGraph;
