import "./Register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">
          <h1>
            <span className="echo">Echo</span>
            <span className="mind">Mind</span>
          </h1>
          <p>Create Your AI Memory Account</p>
        </div>

        <form>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="input-box">
            <label>Create Password</label>
            <input
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="input-box">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit">Create Account</button>

          <div className="login-link">
            Already have an account? <a href="#">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;bh 