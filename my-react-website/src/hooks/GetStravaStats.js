import { useEffect, useState } from "react";

const GetStravaStats = () => {
  const [stravaData, setStravaData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [arrayStats, setArrayStats] = useState({
    Miles: [0],
    TotalRuns: [0],
    Activities: [],
  });


  let clientID = 126353;
  let clientSecret = "07bdcf420899ca46d80ac03ad9110a1f942fcc27";

  const refreshToken = "6cac852b70f598449a8b3cb5955a21467b618e03";
  const callRefreshToken = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`

  useEffect(() => {  
    const days30Ago = Math.floor(Date.now() / 1000) - 2592000;
    const callActivities = `https://www.strava.com/api/v3/athlete/activities?after=${days30Ago}&access_token=`;
    const getActivities = (accessToken) => {
      fetch(callActivities + accessToken)
        .then((response) => response.json())
        .then(
          (data) => setStravaData(data.filter(activity => activity.type === "Run")),
        //   the argument passed to setStravaData is the data from the fetch call, filtered to only include activities of type "Run"
          setIsLoading((prev) => !prev)
        )
        .catch((error) => console.log(error));
    };
    fetch(callRefreshToken, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => getActivities(data.access_token));
  }, [callRefreshToken]);





  const setAllStats = () => {
    if (isLoading) return 0;

    if (!isLoading && stravaData!==null) {
      // console.log(stravaData);

      let miles = 0;
      let activities = [];
      // while we go through each activity we will add miles, name, and date to each activity object
      stravaData.forEach((activity) => {
        miles += activity.distance * 0.000621371;
        activities.push({name: activity.name, distance: (activity.distance * 0.000621371), date: activity.start_date_local, dateEpoch: getDateEpoch(activity.start_date)});
      });


    let totalRuns = stravaData.length;
    setArrayStats({
      Miles: [miles],
      TotalRuns: [totalRuns],
      Activities: activities,
    });
    }
  }

  const getDateEpoch = (date) => {
    let miliEpoch = new Date(date).getTime();
    return miliEpoch/1000;
  }




  useEffect(() => {
    setAllStats();
  }, [isLoading, stravaData]);




  return arrayStats;
};

export default GetStravaStats;