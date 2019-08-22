import React, { useState } from "react";

function GoodButton() {
  const [count, setCount] = useState(5);

  if (count === 0) {
    return (
      <>
        <h3>Ура, все получилось!</h3>
        <button onClick={() => setCount(5)}>Еще раз</button>
      </>
    );
  }

  return (
    <button onClick={() => setCount(count - 1)}>Нажими {count} раз</button>
  );
}

export default GoodButton;
