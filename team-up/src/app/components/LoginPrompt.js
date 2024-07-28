import "../dashboard.css";
import MatchingButton from "../components/MatchingButton";
import { Apple, Github, Google } from "react-bootstrap-icons";


function LoginPrompt() {
  return (
    <div className="m-2 w-full signup-prompt">
      <h3>Sign up or log in to get started.</h3>

      <MatchingButton link="/api/auth/login" full>
        Continue with <Google style={{ padding: "3px" }} />{" "}
        <Github style={{ padding: "3px" }} />{" "}
        <Apple style={{ padding: "3px" }} />
      </MatchingButton>

      <h3>or</h3>

      <form>
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="Email address"
        />
        <input
          type="password"
          required
          name="password"
          id="password"
          placeholder="Password"
        />
        <MatchingButton full type="submit">
          Continue with email
        </MatchingButton>
      </form>
    </div>
  )
}

export default LoginPrompt;