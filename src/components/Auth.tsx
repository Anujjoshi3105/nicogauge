"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Password } from "./ui/password";
import Link from "next/link";

type AuthProps = {
  isRegister: boolean;
  className?: string;
};

export default function Auth({ isRegister, className }: AuthProps) {
  const [isLogin, setIsLogin] = useState(!isRegister);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin) {
      console.log("Registering:", { email, password });
    } else {
      console.log("Logging in:", { email, password, rememberMe });
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleGithubLogin = () => {
    console.log("GitHub login clicked");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsLogin(!isLogin)}
          className={cn(
            className,
            "hover:scale-105 duration-150 rounded-full px-6 py-2"
          )}>
          {isRegister ? "Sign in" : "Register"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-primary text-3xl">
            {isLogin ? "Login" : "Register"}
          </DialogTitle>
          <DialogDescription>
            {isLogin ? "Sign in to your account" : "Create a new account"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/auth/reset"
                className="ml-auto inline-block text-xs hover:underline hover:text-primary">
                Forgot your password?
              </Link>
            </div>
            <Password
              id="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isLogin && (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
          )}
          <Button type="submit" className="w-full text-background">
            {isLogin ? "Login" : "Register"}
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Button
            onClick={handleGoogleLogin}
            className="border border-input bg-background shadow-sm hover:bg-accent hover:text-background">
            <Github />
            GitHub
          </Button>
          <Button
            onClick={handleGithubLogin}
            className="border border-input bg-background shadow-sm hover:bg-accent hover:text-background">
            <svg role="img" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path>
            </svg>
            Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          {isLogin ? (
            <p>
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-primary hover:underline">
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-primary hover:underline">
                Sign in
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
