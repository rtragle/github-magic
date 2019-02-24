import React from 'react';
import { withRouter } from "react-router";

import LookupTable from './LookupTable';

const Followers = ({ match: { params: { userName } } }) => (
  <div>
    <h2>Followers (and their Followers)</h2>
    <LookupTable userName={userName} />
  </div>
);

export default withRouter(Followers);
