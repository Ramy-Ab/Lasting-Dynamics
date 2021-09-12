import React from "react";

export default function List({ getItems }) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(getItems(5));
    console.log("updating items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}
