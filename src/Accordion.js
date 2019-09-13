import React, { useState } from "react";
import AccordionSection from "./AccordionSection";
function Accordion({ children, multipleAllowed }) {
  const [openSections, setOpenSections] = useState([]);

  const onClick = label => {
    const shouldToggle = openSections.find(item => item === label);
    if (multipleAllowed) {
      if (shouldToggle) {
        const toggledList = openSections.filter(item => item !== label);
        setOpenSections([...toggledList]);
      } else {
        setOpenSections([...openSections, label]);
      }
    } else {
      if (shouldToggle) {
        setOpenSections([]);
      } else {
        setOpenSections([label]);
      }
    }
  };

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {children.map(child => {
          return (
            <AccordionSection
              key={child.props.label}
              label={child.props.label}
              onClick={onClick}
              isOpen={openSections.indexOf(child.props.label) !== -1}
            >
              {child.props.children}
            </AccordionSection>
          );
        })}
      </ul>
    </div>
  );
}

export default Accordion;
