
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../ui/card";
import { Input } from "../../ui/input";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { useNavigate } from "react-router-dom";
import { TriangleAlert } from "lucide-react";
import { CircleCheck} from "lucide-react";

const SignInCard = ({
        isPending,
        isSuccess,
        error,
        signInForm, 
        setSignInForm, 
        validationErrors,
        onSignInFormSubmit,
      }) => {
  
        const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <Card>
              <CardHeader className="w-full flex flex-col items-center justify-between gap-4">
                <div className="w-full flex items-center justify-between gap-4">
                  <Button className="flex-1 bg-zinc-200" variant="outline" size="lg">SignIn</Button>
                  <Button onClick={()=>navigate('/auth/signup')} className="flex-1" variant="outline" size="lg">SignUp</Button>
                </div>
                <Separator className='mb-2'/>
                <CardTitle className="w-full text-center">SignIn to your Account</CardTitle>
                {
                  validationErrors &&(
                    <div className="flex items-center gap-2 bg-destructive/15 rounded-md mb-4 text-destructive-foreground w-full text-red-600 text-xs p-4">
                      <TriangleAlert className="size-4"/>  <p>{validationErrors.message}</p>
                    </div>
                  )
                }
                {
                    error && (
                    <div className="flex items-center gap-2 bg-destructive/15 rounded-md mb-4 text-destructive-foreground w-full text-red-600 text-xs p-4">
                      <TriangleAlert className="size-4"/> <p>{error}</p>
                    </div>)
                }
                {
                    isSuccess && (
                        <div className="flex items-center gap-2 bg-emerald-100 rounded-md mb-4 text-destructive-foreground w-full text-emerald-800 text-xs p-4">
                          <CircleCheck className="size-4"/> <p>Successfully signed in. Redirecting....</p>
                        </div>
                    )
                }
              </CardHeader>
              <CardContent className="space-y-2">
                <form className="space-y-2" onSubmit={onSignInFormSubmit}>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={signInForm?.email}
                      onChange={(e)=> setSignInForm({...signInForm, email: e.target.value})}
                      disabled={isPending}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="**********"
                      required
                      value={signInForm?.password}
                      onChange={(e)=> setSignInForm({...signInForm, password: e.target.value})}
                      disabled={isPending}
                    />
                  </div>
                  <Separator className="my-4"/>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size={"lg"}
                    disabled={isPending}
                    >{isPending ? "Signing in..." : "Sign In"}</Button>
                </form>
              </CardContent>
              <CardFooter>
                <CardDescription className="w-full text-center text-xs">
                  <div className="">
                    Don't have an account?{" "}
                    <span>Click on the Sign-Up button.</span>
                  </div>
                  <Button 
                    onClick={()=> navigate('/auth/forgot-password')}
                    variant="link" 
                    className="text-xs text-zinc-500 hover:text-zinc-600 underline underline-offset-2 cursor-pointer"
                    >Forgot Password?</Button>
                </CardDescription>
              </CardFooter>
            </Card>
    </div>
  );
};

export default SignInCard;
