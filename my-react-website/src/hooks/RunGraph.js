import "../style/RunGraph.css";

const RunGraph = () => {

  return (
    <svg className="graphContainerSVG" width="80%" height="80%">
                  <rect x="0" y="0" width="100%" height="100%" fill="tomato" />
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="100%"
                    stroke="black"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  {/* to round the end of the line we can add stroke-linecap="round"
                   */}
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="black"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  {/* here we might have to create a component to handle creating all the divs instead of adding 30 divs here. */}
                
                
                
                
                
                
                
                </svg>
  )
};

export default RunGraph;