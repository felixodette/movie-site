import PropTypes from 'prop-types';

const User = ({ user, showGamesPlayed }) => {
  return (
    <li className={"user"}>
      <p>Username: {user.name}</p>
      <p>Number of Games Played: {showGamesPlayed ? user.numGamesPlayed : '*'}</p>
    </li>
  );
};
