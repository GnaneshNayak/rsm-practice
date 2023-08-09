import { useEffect, useState } from 'react';

export function ComponentsLifeCycle() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');

  // useEffect(() => {
  //   console.log('monted');
  //   setTimeout(() => {
  //     console.log('my name is' + name);
  //   }, 1000);
  //   return () => {
  //     console.log('component unmonted');
  //   };
  // }, [name]);
  useEffect(() => {
    document.addEventListener('click', () => {
      console.log('clicked');
    });
    console.log('monted');

    return () => {
      console.log(' unmonted');
    };
  });

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log('my name is' + name);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
