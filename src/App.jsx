import React from 'react';

const App = () => {
  return <div>App</div>;
};

export default App;

// import Home from './components/Router/Home';
// import About from './components/Router/About';
// import Store from './components/Router/Store';

// const App = () => {
//   const url = window.location.pathname;
//   console.log(url);

//   let component;

//   if (url === '/') {
//     component = <Home />;
//   }
//   if (url === '/about') {
//     component = <About />;
//   }
//   if (url === '/store') {
//     component = <Store />;
//   }
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/about">about</a>
//           </li>
//           <li>
//             <a href="/store">store</a>
//           </li>
//         </ul>
//       </nav>

//       {component}
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';
// import useFetch from './components/basic hooks/useFetch';

// const URLS = {
//   USERS: 'https://jsonplaceholder.typicode.com/users',
//   POSTS: 'https://jsonplaceholder.typicode.com/posts',
//   COMMENTS: 'https://jsonplaceholder.typicode.com/comments',
// };

// export default function App() {
//   const [url, setUrl] = useState(URLS.USERS);

//   const { data, isLoading, isError } = useFetch(url);
//   // console.log(data);
//   // BONUS:
//   // const { data, isLoading, isError } = useFetch(url, OPTIONS);

//   return (
//     <>
//       <div>
//         <label>
//           <input
//             type="radio"
//             checked={url === URLS.USERS}
//             onChange={() => setUrl(URLS.USERS)}
//           />
//           Users
//         </label>
//         <label>
//           <input
//             type="radio"
//             checked={url === URLS.POSTS}
//             onChange={() => setUrl(URLS.POSTS)}
//           />
//           Posts
//         </label>
//         <label>
//           <input
//             type="radio"
//             checked={url === URLS.COMMENTS}
//             onChange={() => setUrl(URLS.COMMENTS)}
//           />
//           Comments
//         </label>
//       </div>
//       {isLoading ? (
//         <h1>Loading...</h1>
//       ) : isError ? (
//         <h1>Error</h1>
//       ) : (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       )}
//     </>
//   );
// }

// import React from 'react';
// import StateForm from './components/Forms/stateForm';
// import RefForm from './components/Forms/refForm';
// import ReactHookForm from './components/Forms/ReactHookForm';
// import Counter from './components/AdavanceStatefulComponents/Counter';

// const App = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

// export default App;

// import React, { useRef, useState } from 'react';

// const App = () => {
//   const [name, setName] = useState('');
//   const nameRef = useRef(null);
//   const handleClick = (e) => {
//     e.preventDefault();
//     if (nameRef.current !== null) {
//       console.log(nameRef.current.value);
//     }
//   };

//   // console.log(nameRef);
//   // console.log('rendring');
//   return (
//     <form onSubmit={handleClick}>
//       <label>Name</label>
//       <input
//         ref={nameRef}
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button>alert</button>
//     </form>
//   );
// };

// export default App;

// import useLocalStorage from './components/basic hooks/useLocalStorage';

// function App() {
//   const [firstName, setFirstName] = useLocalStorage('FIRST_NAME', '');

//   // Bonus:
//   const [lastName, setLastName] = useLocalStorage('LAST_NAME', () => {
//     return 'Default';
//   });

//   // // Bonus:
//   const [hobbies, setHobbies] = useLocalStorage('HOBBIES', [
//     'Programming',
//     'Weight Lifting',
//   ]);

//   return (
//     <>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           marginBottom: '1rem',
//         }}
//       >
//         <label>First Name</label>
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </div>

//       {/* Bonus: */}
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           marginBottom: '1rem',
//         }}
//       >
//         <label>Last Name</label>
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//       </div>

//       {/* Bonus: */}
//       <div>{hobbies.join(', ')}</div>
//       <button
//         onClick={() =>
//           setHobbies((currentHobbies) => [...currentHobbies, 'New Hobby'])
//         }
//       >
//         Add Hobby
//       </button>
//     </>
//   );
// }

// export default App;

// import React, { useCallback, useEffect, useState } from 'react';

// const App = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState(0);

//   const printName = () => {
//     console.log(name, 'from print');
//   };

//   useEffect(() => {
//     printName();
//   }, [printName]);

//   return (
//     <center>
//       <div>
//         <label> name</label>
//         <input
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         ></input>
//         <br />
//         <br />
//         <br />
//         <label> age</label>
//         <input type="number" onChange={(e) => setAge(e.target.value)}></input>
//       </div>
//     </center>
//   );
// };

// export default App;

// import useArray from './components/basic hooks/useArray';

// const INITIAL_ARRAY = [1, 2, 3];
// // const INITIAL_ARRAY = () => [1, 2, 3]

// function App() {
//   const { array, set, push, replace, filter, remove, clear, reset } =
//     useArray(INITIAL_ARRAY);
//   // const { array, set, push } = useArray(INITIAL_ARRAY);

//   return (
//     <>
//       <div>{array.join(', ')}</div>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '.5rem',
//           alignItems: 'flex-start',
//           marginTop: '1rem',
//         }}
//       >
//         <button onClick={() => set([4, 5, 6])}>Set to [4, 5, 6]</button>
//         <button onClick={() => push(4)}>Push 4</button>
//         <button onClick={() => replace(1, 9)}>
//           Replace the second element with 9
//         </button>
//         <button onClick={() => filter((n) => n < 3)}>
//           Keep numbers less than 3
//         </button>
//         <button onClick={() => remove(1)}>Remove second element</button>
//         <button onClick={clear}>Clear</button>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </>
//   );
// }

// export default App;

// import { useState } from 'react';

// import useFetch from './components/basic hooks/useFetch';

// // If the API does not work use these local URLs
// // const URLS = {
// //   USERS: 'users.json',
// //   POSTS: 'posts.json',
// //   COMMENTS: 'comments.json',
// // };

// const URLS = {
//   USERS: 'https://jsonplaceholder.typicode.com/users',
//   POSTS: 'https://jsonplaceholder.typicode.com/posts',
//   COMMENTS: 'https://jsonplaceholder.typicode.com/comments',
// };

// // BONUS:
// // const OPTIONS = {
// //   method: 'POST',
// //   body: JSON.stringify({ name: 'Kyle' }),
// //   headers: {
// //     'Content-type': 'application/json',
// //   },
// // };

// function App() {
//   const [url, setUrl] = useState(URLS.USERS);

//   const { data, isLoading, isError } = useFetch(url);
//   // console.log(data);
//   // BONUS:
//   // const { data, isLoading, isError } = useFetch(url, OPTIONS);

//   return (
//     <>
//       <div>
//         <label>
//           <input
//             type="radio"
//             checked={url === URLS.USERS}
//             onChange={() => setUrl(URLS.USERS)}
//           />
//           Users
//         </label>
//         <label>
//           <input
//             type="radio"
//             checked={url === URLS.POSTS}
//             onChange={() => setUrl(URLS.POSTS)}
//           />
//           Posts
//         </label>
//         <label>
//           <input
//             type="radio"
//             checked={url === URLS.COMMENTS}
//             onChange={() => setUrl(URLS.COMMENTS)}
//           />
//           Comments
//         </label>
//       </div>
//       {isLoading ? (
//         <h1>Loading...</h1>
//       ) : isError ? (
//         <h1>Error</h1>
//       ) : (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       )}
//     </>
//   );
// }

// export default App;

// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import useToggel from './components/basic hooks/useToggle';

// const App = () => {
//   const inputRef = useRef(null);
//   // const [name, setName] = useState('');
//   const inputVALUE = useInputValue('');
//   const [age, setAge] = useState(0);
//   // const [isDark, setDark] = useState(false);
//   const [isDark, toggle] = useToggel(false);

//   return (
//     <div
//       style={{
//         marginTop: '30px',
//         background: isDark ? '#000' : '#fff',
//         color: isDark ? '#fff' : '#000',
//       }}
//     >
//       <label>
//         name:
//         <input {...inputVALUE} type="text" />
//       </label>
//       <br />
//       <br />
//       <label>
//         age:
//         <input
//           ref={inputRef}
//           onChange={(e) => setAge(e.target.value)}
//           type="number"
//         />
//       </label>
//       <br />
//       <br />
//       <br />
//       <button onClick={toggle}> dark </button>
//     </div>
//   );
// };

// export default App;

// function useInputValue(initialValue) {
//   const [value, setValue] = useState(initialValue);

//   return {
//     value,
//     onChange: (e) => setValue(e.target.value),
//   };
// }

// const printName = useCallback(() => {
//   console.log(`name : ${name}`);
// }, [name]);

// function printName() {
//   console.log(`name : ${name}`);
// }

// useEffect(() => {
//   console.log('in effect');
//   printName();
// }, [printName]);

// const List = Array(100)
//   .fill()
//   .map((_, i) => i + 1);
// console.log(List);

// const filteredList = List.filter((n) => n.toString());
// console.log(filteredList);

// console.log(inputRef.current);
// import React, { useEffect, useState } from 'react';
// import React from 'react';

// export default class AppClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//     };
//     this.inputRef = React.createRef();
//   }
//   componentDidMount() {
//     console.log('mounted');
//     this.inputRef.current.focus();
//   }

//   render() {
//     return (
//       <>
//         name:
//         <input
//           ref={this.inputRef}
//           value={this.state.name}
//           onChange={(e) => this.setState({ name: e.target.value })}
//           type="text"
//         />
//       </>
//     );
//   }
// }

// import axios, { CanceledError } from 'axios';

// const App = () => {
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     const controller = new AbortController();
//     axios
//       .get('https://jsonplaceholder.typicode.com/users', {
//         signal: controller.signal,
//       })
//       .then((res) => setUser(res.data))
//       .catch((error) => {
//         if (error instanceof CanceledError) return;
//         console.log(error);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   console.log(user);
//   return (
//     <div>
//       <h1>users</h1>
//       <ul>
//         {user.map((u) => (
//           <li>{u.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// function App() {
//   const [list, setList] = useState([]);
//   useEffect(() => {
//     Axios({
//       url: 'https://jsonplaceholder.typicode.com/users',
//     })
//       .then((response) => {
//         setList(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <div>
//         {list.map((item) => (
//           <div key={item.id}>
//             <h3>{item.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// const App = () => {
//   const [users, setUsers] = useState();
//   const [loading, setLoading] = useState(true);
//   // useEffect(() => {
//   //   const controller = new AbortController();

//   //   fetch('https://jsonplaceholder.typicode.com/users', {
//   //     signal: controller.signal,
//   //   })
//   //     .then((res) => {
//   //       if (res.status == 200) {
//   //         return res.json();
//   //       } else {
//   //         return Promise.reject(res);
//   //       }
//   //     })
//   //     .then((data) => {
//   //       console.log('sere');
//   //       console.log(data);
//   //       setUsers(data.stringf);
//   //     })
//   //     .catch((err) => console.log(err));

//   //   return () => {
//   //     controller.abort();
//   //   };
//   // }, []);

//   useEffect(() => {
//     setLoading(true);
//     axios({
//       url: 'https://jsonplaceholder.typicode.com/users',
//     })
//       .then((res) => setUsers(res.data))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <h2>loading...</h2>;

//   return (
//     <div>
//       <h1>hello</h1>
//       <ul>
//         {users.map((user) => {
//           console.log(user.name);
//           <li>{user.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import NameConter from './components/nameCounter/NameConter';
// import { ComponentsLifeCycle } from './components/component life cycle/ComponentLifeCycle';

// const App = () => {
//   const [isShown, setShown] = useState(true);
//   // console.log('parent');

//   const childComponent = isShown ? <ComponentsLifeCycle /> : null;

//   return (
//     <div>
//       <button onClick={() => setShown(!isShown)}>Show/Hide</button>
//       {childComponent}
//       {/* <ComponentsLifeCycle /> */}
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';
// import { Child } from './components/component life cycle/Child';

// export default function App() {
//   const [show, setShow] = useState(true);

//   const childComponent = show ? <Child /> : null;

//   return (
//     <div>
//       <button onClick={() => setShow((currentShow) => !currentShow)}>
//         Show/Hide
//       </button>
//       {childComponent}
//     </div>
//   );
// }
