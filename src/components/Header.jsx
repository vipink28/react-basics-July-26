import React from "react";

function Header() {
  let title = "React Header Component";
  let headerClass = "bg-secondary";
  let isHeading = false;
  let isVisible = false;

  return (
    <>
      <div>
        <h2 className="bg-primary">{title}</h2>
        {/* dynamic classes */}
        <h2 className={headerClass}>{title}</h2>

        {/* conditional classes */}
        <h2 className={isHeading ? "bg-secondary" : "bg-alternate"}>{title}</h2>

        {/* style attribute */}
        <p style={{ color: "red", backgroundColor: "yellow" }}>
          This is paragraph
        </p>

        {/* conditional rendering */}
        {isVisible ? <p>I am visible</p> : <p>I am not visible</p>}
      </div>
      <div>
        <h2>Second Section</h2>
      </div>
    </>
  );
}
export default Header;
