import { useState } from "react";

function Login() {
  const [name, setName] = useState("");     // NEW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert(`Welcome ${name}! Login Successful`);
  };

  return (
    <div style={{
      width: "300px",
      margin: "100px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Name Field */}
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        {/* Email Field */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;