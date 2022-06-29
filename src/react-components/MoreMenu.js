import React, { useState } from "react";

export function MoreMenu({ items }) {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="menuContainer">
      <button className="menuButton btn-secondary" onClick={() => setMenuVisible(!menuVisible)}>
        ···
      </button>
      {menuVisible && <div className="menu">{items}</div>}
    </div>
  );
}
