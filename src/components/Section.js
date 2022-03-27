import React from 'react';
import '../styles/Section.css';

function Section({ Icon, title, color, selected }) {
  return (
    // sets the classname to section and add a class name called section--selected
    // if the selected prop was passed in
    <div 
        className={`section ${selected && "section--selected"}`}
        //  use an inline style to work with the passed in color
        // property but not the best way to do it (slightly faster)
        // though
         style={{
           borderBottom: `3px solid ${color}`,
           color: `${selected && color}`,
        }}
    >
        {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  );
}

export default Section