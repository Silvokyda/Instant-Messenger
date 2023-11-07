// pages/LoginPage.js

import { useState } from 'react';

const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     // Implement login functionality here
//     // Use your chosen authentication library or handle authentication logic here
//     // For example:
//     // await signIn({ email, password });
//   };

  return (
    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
        <button type="submit">Login</button>
//       </form>
//     </div>
  );
};

export default LoginPage;
