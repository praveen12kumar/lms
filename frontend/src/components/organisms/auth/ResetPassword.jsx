import { Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TriangleAlert } from "lucide-react";
import { CircleCheck} from "lucide-react";

import React from 'react'

const ResetPassword = ({validationErrors, formInput, setFormInput, onResetPasswordFormSubmit, error, isSuccess, isPending}) => {
  return (
    <div className='w-full h-dvh flex items-center justify-center bg-zinc-900'>
        <Card className="w-full max-w-[420px] h-auto">
            <CardHeader className="w-full text-center text-xl font-bold">
          <CardTitle>Change Password</CardTitle>
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
        <Separator className='my-2'/>
        <CardContent>
                <form className='space-y-2' onSubmit={onResetPasswordFormSubmit}>
                    <div className="grid gap-2">
                    <Label htmlFor="oldPassword">Old Password</Label>
                    <Input
                      id="oldPassword"
                      type="password"
                      placeholder="**********"
                      required
                      value={formInput?.oldPassword}
                      onChange={(e)=> setFormInput({...formInput, oldPassword: e.target.value}) }
                      disabled={isPending}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="**********"
                      required
                      value={formInput?.newPassword}
                      onChange={(e)=> setFormInput({...formInput, newPassword: e.target.value}) }
                      disabled={isPending}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="**********"
                      required
                      value={formInput?.confirmPassword}
                      onChange={(e)=> setFormInput({...formInput, confirmPassword: e.target.value}) }
                      disabled={isPending}
                    />
                  </div>
                  <Separator className="my-4"/>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size={"lg"}
                    disabled={isPending}
                    >{isPending ? "Submitting..." : "Submit"}</Button>
                </form>
        </CardContent>
        </Card>
    </div>
  )
}

export default ResetPassword