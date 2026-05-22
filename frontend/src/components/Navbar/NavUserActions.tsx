import React from 'react';

// Definícia typov pre používateľa a props
interface User {
  name: string;
  initials: string;
}

interface NavUserActionsProps {
  user: User;
}

const NavUserActions = ({ user }: NavUserActionsProps) => {
  return (
    <div className="nav-user-actions">
      <button className="icon-btn">•••</button>
      <button className="icon-btn notification-badge">🔔</button>
      
      <div className="user-profile">
        <div className="avatar-circle">{user.initials}</div>
        <span className="user-name">{user.name}</span>
        <span className="dropdown-arrow">▼</span>
      </div>
    </div>
  );
};

export default NavUserActions;