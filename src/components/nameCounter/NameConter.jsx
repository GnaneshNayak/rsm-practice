import React, { useState } from 'react';

const NameConter = () => {
  const [person, setPerson] = useState({
    name: '',
    age: 0,
  });
  return (
    <div>
      <h1> name counter</h1>
      <input
        text
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />

      <div>
        <button onClick={() => setPerson({ ...person, age: person.age + 1 })}>
          +
        </button>
        {person.age}
        <button onClick={() => setPerson({ ...person, age: person.age - 1 })}>
          -
        </button>
      </div>
      <h2>
        my name is {person.name} and my age is {person.age}
      </h2>
    </div>
  );
};

export default NameConter;
