import React, { useEffect, useState } from 'react';
import axios, { CanceledError } from 'axios';

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => setUser(res.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        console.log(error);
      });

    return () => {
      controller.abort();
    };
  }, []);

  console.log(user);
  return (
    <div>
      <h1>users</h1>
      <ul>
        {user.map((u) => (
          <li>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

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
