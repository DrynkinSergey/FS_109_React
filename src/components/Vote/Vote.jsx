import { useState } from 'react';

const Vote = () => {
  const [voteData, setVoteData] = useState({
    macOS: 0,
    windows: 0,
    linux: 0,
    android: 0,
    symbian: 0,
  });

  // DRY - Don't repeat yourself

  const handleClickByOption = value => {
    console.log(value);
    // if (value === 'windows') {
    //   setVoteData(prev => ({ ...prev, windows: prev.windows + 1 }));
    // }
    // if (value === 'linux') {
    //   setVoteData(prev => ({ ...prev, linux: prev.linux + 1 }));
    // }
    // if (value === 'macOS') {
    //   setVoteData(prev => ({ ...prev, macOS: prev.macOS + 1 }));
    // }
    setVoteData(prev => ({
      ...prev,
      [value]: prev[value] + 1,
    }));
  };

  return (
    <div>
      <h2>Voting list</h2>
      <ul>
        <li>windows: {voteData.windows}</li>
        <li>macOS: {voteData.macOS}</li>
        <li>linux: {voteData.linux}</li>
      </ul>
      <section>
        {Object.keys(voteData).map(option => (
          <button key={option} onClick={() => handleClickByOption(option)}>
            {option}
          </button>
        ))}
      </section>
    </div>
  );
};
export default Vote;
