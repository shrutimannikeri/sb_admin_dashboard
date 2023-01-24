import React from "react";

export function ColorBoxP({ colorlist }) {
  return (
    <p className={colorlist.classname}>{colorlist.text}</p>
  );
}
