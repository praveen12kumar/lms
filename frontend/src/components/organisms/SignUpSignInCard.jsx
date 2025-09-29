import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const SignUpSignInCard = () => {
  const [activeTab, setActiveTab] = useState("sign-in");

  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  function handleSignUp(e){
    e.preventDefault();
    console.log("sign up data", signUpData);
  }

  function handleSignIn(e){
    e.preventDefault();
    console.log("sign in data", signInData);
  }

  return (
    <div className="w-full h-full">
      <Card>
        <Tabs defaultValue="sign-in">
          <TabsList className="w-full flex justify-center">
            <TabsTrigger value="sign-in"> Sign-In</TabsTrigger>
            <TabsTrigger value="sign-up"> Sign-Up</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <Card>
              <CardHeader>
                <CardTitle className="w-full text-center">SignIn to your Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <form className="space-y-2" onSubmit={handleSignIn}>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={signInData.email}
                      onChange={(e)=> setSignInData({...signInData, email: e.target.value})}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="**********"
                      required
                      value={signInData.password}
                      onChange={(e)=> setSignInData({...signInData, password: e.target.value})}
                    />
                  </div>
                  <Separator className="my-4"/>
                  <Button type="submit" className="w-full" size={"lg"}>SignIn</Button>
                </form>
              </CardContent>
              <CardFooter>
                <CardDescription className="w-full text-center text-xs">
                  <div className="mb-1">
                    Don't have an account?{" "}
                    <span>Click on the Sign-Up button.</span>
                  </div>
                  <span className="text-xs underline underline-offset-2 cursor-pointer">Forgot Password?</span>
                </CardDescription>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="sign-up">
            <Card>
              <CardHeader>
                <CardTitle className="w-full text-center">Create your Account</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <form className="space-y-2" onSubmit={handleSignUp}>
                  <div className="grid gap-1">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={signUpData.username}
                      onChange={(e)=> setSignUpData({...signUpData, username: e.target.value})}
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={signUpData.email}
                      onChange={(e)=> setSignUpData({...signUpData, email: e.target.value})}
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="**********"
                      required
                      value={signUpData.password}
                      onChange={(e)=> setSignUpData({...signUpData, password: e.target.value})}
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="password">Confirm Password</Label>
                    <Input
                      id="confirrmPassword"
                      type="password"
                      placeholder="**********"
                      required
                      value={signUpData.confirmPassword}
                      onChange={(e)=> setSignUpData({...signUpData, confirmPassword: e.target.value})}
                    />
                  </div>
                  <Separator className="my-4"/>
                  <Button type="submit" className="w-full" size={"lg"}>SignUp</Button>
                </form>
              </CardContent>
              <CardFooter>
                <CardDescription className="w-full text-xs text-center text-muted-foreground">Already have an account? <span>Click on the Sign-In button.</span> </CardDescription>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default SignUpSignInCard;
