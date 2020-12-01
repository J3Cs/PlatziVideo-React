import { useState, useEffect } from 'react';

const useInitialState = (Api) => {
  const [videos, setVideos] = useState([]);
  console.log('patas');
  useEffect(() => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);
  return (videos);
};

export default useInitialState;
