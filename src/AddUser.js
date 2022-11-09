import PropTypes from 'prop-types';
import { useState } from 'react';

const AddUser = ({ users, onAddUser }) => {
  const [userExists, setUserExists] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    userName: '',
  });
};

export default AddUser;
