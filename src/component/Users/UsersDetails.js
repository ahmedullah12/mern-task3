import React from 'react';

const UsersDetails = ({selectedUser}) => {

  return (
    <div>
      <p>Here you can see the user details</p>
      <div>
      {
        !selectedUser ? 
        <p>Please click user details button to see a user details</p>
        :
        (
          <>
            {selectedUser.jobTitle}
          </>
        )
      }
      </div>
    </div>
  );
};

export default UsersDetails;