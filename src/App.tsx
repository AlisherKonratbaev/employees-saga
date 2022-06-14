import React, {useEffect} from 'react';
import {useAppSelector} from "./hooks";


function App() {
  const jobs = useAppSelector(store => store.jobs.list);
  useEffect(() => {
    console.log(jobs)
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
