/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

const UseInitialState = (Api) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default UseInitialState;
