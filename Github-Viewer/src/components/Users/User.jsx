import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, followers, following, url }) => (
  <div>
    <h3>
      Name: {name}
    </h3>
    <div>
      Followers: {followers}
    </div>
    <div>
      Following: {following}
    </div>
    <div>
      Github Link: {url}
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  url: PropTypes.number.isRequired, 
};

export default User;

