import '../styles/SidebarOption.css';

import React from 'react'

function SidebarOption({Icon, title, number, selected}) {
  return (
    // the expression in the square braces adds the sidebar-option--active portion
    // iff the selected property={true} prop was passed in
    <div className={`sidebar-option ${selected && 'sidebar-option--active'}`}>
      {Icon && <Icon />}
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption