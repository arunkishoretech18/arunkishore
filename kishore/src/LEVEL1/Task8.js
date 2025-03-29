import React from "react";
function ConditionalRendering({ userRole }) {
    return (
      <div>
        {userRole === "Admin" ? (
          <h2>Welcome, Admin! You have full access.</h2>
        ) : (
          <h2>Welcome, User! You have limited access.</h2>
        )}
      </div>
    );
  }
  export default ConditionalRendering;