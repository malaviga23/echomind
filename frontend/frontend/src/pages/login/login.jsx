import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <h1>
            <span className="echo">Echo</span>
            <span className="mind">Mind</span>
          </h1>
          <p>Your AI Powered Second Brain</p>
        </div>

        <form>
          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="signup">
            Don't have an account?{" "}
            <a href="#">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;