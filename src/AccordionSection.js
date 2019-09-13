import React from "react";

function AccordionSection({ onClick, label, isOpen, children }) {
  const handleClick = () => {
    onClick(label);
  };
  return (
    <li className="list-group-item">
      <div onClick={handleClick} className="d-flex flex-row" style={{ cursor: "pointer" }}>
        {label}
        <div className="ml-auto">
          {!isOpen && <span>&#9650;</span>}
          {isOpen && <span>&#9660;</span>}
        </div>
      </div>
      {isOpen && (
        <div
          className="fade__in mt-2 text-secondary"
          //   style={{
          //     background: "#D5C7BC",
          //     border: "1px solid #ACA885",
          //     marginTop: 10,
          //     padding: "10px 20px"
          //   }}
        >
          {children}
        </div>
      )}
    </li>
  );
}

export default AccordionSection;
