"use client";

import React, { useState, FormEvent } from "react";
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
} from "@/components/ui/dialog";
import { Password } from "@/components/ui/password";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Oauth from "./Oauth";

type AuthProps = {
  type?: "register" | "login";
  size?: "rounded" | "default" | "sm" | "lg" | "icon";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "tertiary"
    | "ghost"
    | "link"
    | "expandIcon"
    | "ringHover"
    | "shine"
    | "gooeyRight"
    | "gooeyLeft"
    | "linkHover1"
    | "linkHover2";
  className?: string;
};

export default function Auth({
  type = "login",
  size = "rounded",
  variant = "default",
  className,
}: AuthProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(type === "login");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Registration State
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState<Date | null>(null);

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Logging in:", { email, password, rememberMe });
  };

  const handleRegisterSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Registering:", {
      email,
      password,
      gender,
      dob,
    });
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size={size}
        variant={variant}
        className={cn(className)}>
        {type}
      </Button>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) {
            setIsLogin(type === "login");
          }
        }}>
        <DialogContent className="max-w-md">
          <DialogHeader className="">
            <DialogTitle className="text-primary text-3xl ">
              {isLogin ? "Login" : "Register"}
            </DialogTitle>
            <DialogDescription>
              {isLogin ? "Sign in to your account" : "Create a new account"}
            </DialogDescription>
          </DialogHeader>
          {isLogin ? (
            <form onSubmit={handleLoginSubmit} className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/reset"
                    className="ml-auto text-xs hover:underline text-primary">
                    Forgot your password?
                  </Link>
                </div>
                <Password
                  id="password"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  name="remember"
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(Boolean(checked))}
                />
                <Label htmlFor="remember" className="cursor-pointer">
                  Remember me
                </Label>
              </div>
              <Button type="submit" className="w-full text-background">
                Login
              </Button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select gender"
                        className="placeholder:text-muted-foreground"
                      />
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
                        size="sm"
                        className={cn(
                          "w-full justify-start bg-foreground hover:bg-foreground text-sm",
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
                <Label htmlFor="password">Password</Label>
                <Password
                  id="password"
                  placeholder="**********"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full text-background">
                Register
              </Button>
            </form>
          )}
          <Oauth />
          <div className="mt-4 text-center text-sm">
            {isLogin ? (
              <>
                Don&apos;t have an account?&nbsp;
                <button
                  onClick={() => setIsLogin(false)}
                  className="font-semibold underline hover:text-primary">
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?&nbsp;
                <button
                  onClick={() => setIsLogin(true)}
                  className="font-semibold underline hover:text-primary">
                  Login
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
