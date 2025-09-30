import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input'; 
import { TriangleAlert } from "lucide-react";
import { CircleCheck} from "lucide-react";
import React from 'react'

const ForgotPassword = ({validationErrors, formInput, setFormInput, onForgotPasswordFormSubmit, error, isSuccess, isPending}) => {
  return (
    <div className='w-full h-dvh flex items-center justify-center bg-zinc-800'>
        <Card className="w-full max-w-[420px]">
            <CardHeader>
                <CardTitle className="w-full text-center text-xl font-bold">Forgot Password</CardTitle>
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
                          <CircleCheck className="size-4"/> <p>Redirecting to Otp verification...</p>
                        </div>
                    )
                }
            </CardHeader>
            <CardContent>
                <form className="space-y-2" onSubmit={onForgotPasswordFormSubmit}>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={formInput?.email}
                      onChange={(e)=> setFormInput({...formInput, email: e.target.value})}
                      disabled={isPending}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size={"lg"}
                    disabled={isPending}
                    >{false ? "Submiting..." : "Submit"}</Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-between">
                <h3 className='text-center text-md font-medium'>Login to LMS</h3>
                <div className="w-full text-sm text-muted-foreground flex justify-center items-center">
                    <p className=''>Go back to?</p>
                    <Button variant='link' size='sm' className='cursor-pointer hover:underline text-teal-800'>SignIn</Button>
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}

export default ForgotPassword;