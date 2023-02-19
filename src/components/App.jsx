import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile profile={user} />

      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
    </div>
  );
};
