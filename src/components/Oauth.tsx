import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Button } from "./ui/button";

export default function Oauth() {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleGithubLogin = () => {
    console.log("GitHub login clicked");
  };
  return (
    <>
      <div className="relative my-1">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2">or continue with</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Button variant="outline" onClick={handleGoogleLogin}>
          <FaGoogle className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button variant="outline" onClick={handleGithubLogin}>
          <FaGithub className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </>
  );
}
