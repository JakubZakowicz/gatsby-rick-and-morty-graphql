import { navigate } from 'gatsby';
import React from 'react';

const index = () => {
  navigate('characters/1');
  return <div>index</div>;
};

export default index;
