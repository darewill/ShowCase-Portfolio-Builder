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
        <div className="main-title ml-[28%] mt-[5%]">
        <h1 className="text-[70px] font-bold ">Build Your Own <br /> </h1> <h1 className='text-[70px] font-bold text-[#0FFCBE]'>Portfolio</h1>
        <br/>
        <p className='w-[35%] font-semibold text-xl'>Create, customize, and showcase your projects with interactive live demos, GitHub links, and tech stack badges. <br/>Deploy your portfolio in one click and impress recruiters with a polished, professional showcase of your work.</p>
        </div>
        <Card className="login-card w-[450px] h-[370px] ml-[60%] mt-[-320px] text-3xl">
          <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription className='text-xl'>
              Create Your Own Portfolio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label className='text-xl' htmlFor="name">Email</Label>
                  <Input id="name" placeholder="Your email"/>
                  <Label className='text-xl' htmlFor="password">Password</Label>
                  <Input id="password" type='password' placeholder="********" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className='header-button bg-[#122285] mt-[10px] h-[50px] w-[100px] text-lg'>Log In</Button>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
