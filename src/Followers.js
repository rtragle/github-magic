import React from 'react';

import LookupTable from './LookupTable';

const Followers = ({ userName }) => (
  <div>
    <h2>Followers (and their Followers)</h2>
    <LookupTable userName={userName} />
  </div>
);

export default Followers;
