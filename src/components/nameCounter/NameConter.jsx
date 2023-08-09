import React, { useEffect, useState } from 'react';

const NameConter = () => {
  const [person, setPerson] = useState({
    name: '',
    age: 0,
  });
  const [width, setWidth] = useState(window.innerWidth);
  console.log('child');
  useEffect(() => {
    console.log('second');
    const handle = () => {
      console.log(person.name);
    };
    document.addEventListener('click', handle);
    return () => {
      console.log('first');
      document.removeEventListener('click', handle);
    };
  }, [person.name]);
  return (
    <div>
      <h1> name counter</h1>
      <input onChange={(e) => setPerson({ ...person, name: e.target.value })} />

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
      {width}
    </div>
  );
};

export default NameConter;
