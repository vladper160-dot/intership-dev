import React from 'react';

const NavUserActions = ({ user }) => {
  return (
    <div className="nav-user-actions">
      {/* Tri bodky / Menu */}
      <button className="icon-btn">•••</button>
      
      {/* Zvonček / Notifikácie */}
      <button className="icon-btn notification-badge">
        🔔
      </button>
      
      {/* Používateľský profil */}
      <div className="user-profile">
        <div className="avatar-circle">{user.initials}</div>
        <span className="user-name">{user.name}</span>
        <span className="dropdown-arrow">▼</span>
      </div>
    </div>
  );
};

export default NavUserActions;