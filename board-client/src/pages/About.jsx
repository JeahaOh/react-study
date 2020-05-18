import React from 'react';
import queryString from 'query-string';

const About = ({ location, match }) => {
  const query = queryString.parse(location.search);
  console.log(query);
  const detail = query.detail === 'true';
  const name = match.params.name;
  return (
    <div>
      <h1>About {name}</h1>
      {detail && 'detail : blahblah'}
    </div>
  );
};

export default About;
