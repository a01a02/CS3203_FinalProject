import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  disabled?: boolean;
}

const Button = styled.span<ButtonProps>`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      setLoading(true);
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setError("Failed to sign in with Github. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
      <>
        <Button onClick={onClick} disabled={isLoading}>
        <Logo src="/github-logo.svg" />
          {isLoading ? "Loading...": "Continue with Github"}
        </Button>
        {error && <span>{error}</span>}{/*Display the error message*/}
      </>
  );
}
