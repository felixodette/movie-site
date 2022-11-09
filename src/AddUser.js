import PropTypes from 'prop-types';
import { useState } from 'react';

const AddUser = ({ users, onAddUser }) => {
  const [userExists, setUserExists] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    userName: '',
  });

  const checkUserExists = (currentUsername) => {
    for (let user of users) {
      if (user.username === currentUsername) {
        return true;
      }
    }
    return false;
  };
};

export default AddUser;
