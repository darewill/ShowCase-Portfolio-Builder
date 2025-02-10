import React from "react";
import "../style/Login.css";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Login() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="main main-image h-screen">
        <Card className="login-card w-[400px] ml-[55%] mt-[10%]">
          <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription>
              Create Your Own Portfolio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="name" placeholder="Your email"/>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type='password' placeholder="********" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className='header-button bg-[#122285]'>Log In</Button>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
