"use client";

import React, { useState } from "react";
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
import { Password } from "@/components/ui/password";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { CalendarIcon, Github, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { FaGoogle } from "react-icons/fa6";
import { toast } from "sonner";

type AuthProps = {
  isRegister: boolean;
  className?: string;
};

export default function Auth({ isRegister, className }: AuthProps) {
  const [isLogin, setIsLogin] = useState(!isRegister);

  // Login State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Registration State
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in:", { loginEmail, loginPassword, rememberMe });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering:", {
      registerEmail,
      registerPassword,
      gender,
      dob,
      avatarUrl,
    });
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleGithubLogin = () => {
    console.log("GitHub login clicked");
  };

  const uploadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    try {
      const file = event.target.files?.[0];
      if (!file) throw new Error("Please select an image to upload.");

      const fileUrl = URL.createObjectURL(file);
      setAvatarUrl(fileUrl);
    } catch (error) {
      if (error instanceof Error) {
        toast(`Error uploading avatar: ${error.message}`, { duration: 5000 });
      } else {
        toast("Error uploading avatar: Unknown error.", { duration: 5000 });
      }
    } finally {
      setUploading(false);
    }
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
          {isLogin ? "Register" : "Sign in"}
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
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="loginEmail">Email</Label>
              <Input
                id="loginEmail"
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center">
                <Label htmlFor="loginPassword">Password</Label>
                <Link
                  href="/auth/reset"
                  className="ml-auto text-xs hover:underline text-primary">
                  Forgot your password?
                </Link>
              </div>
              <Password
                id="loginPassword"
                placeholder="**********"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(Boolean(checked))}
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit" className="w-full text-background">
              Login
            </Button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="avatar">Avatar</Label>
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={avatarUrl || ""} />
                  <AvatarFallback>
                    <Upload className="w-8 h-8" />
                  </AvatarFallback>
                </Avatar>
                <Input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  onChange={uploadAvatar}
                  disabled={uploading}
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="registerEmail">Email</Label>
              <Input
                id="registerEmail"
                type="email"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Label htmlFor="gender">Gender</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="dob">Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal h-9",
                        !dob && "text-muted-foreground"
                      )}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dob ? format(dob, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dob || undefined}
                      onSelect={(date) => setDob(date || null)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="registerPassword">Password</Label>
              <Password
                id="registerPassword"
                placeholder="**********"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full text-background">
              Register
            </Button>
          </form>
        )}
        <div className="relative my-2">
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
          <Button variant="outline" onClick={handleGoogleLogin}>
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button variant="outline" onClick={handleGithubLogin}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          {isLogin ? (
            <p>
              Don&apos;t have an account?&nbsp;
              <button
                onClick={() => setIsLogin(false)}
                className="font-semibold underline hover:text-primary">
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?&nbsp;
              <button
                onClick={() => setIsLogin(true)}
                className="font-semibold underline hover:text-primary">
                Login
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
