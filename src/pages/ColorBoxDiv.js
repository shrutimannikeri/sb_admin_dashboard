import React from "react";

export function ColorBoxDiv({ colorlist }) {
  return (
    <p className={colorlist.classname}>{colorlist.text}</p>
  );
}
