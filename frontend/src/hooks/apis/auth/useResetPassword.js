import { useMutation } from "@tanstack/react-query";
import { resetPasswordRequest } from "@/apis/auth";
import toast from "react-hot-toast";


export const useResetPassword = () =>{
    const {isPending, isSuccess, error, mutateAsync: resetPasswordMutution} = useMutation({
        mutationFn: resetPasswordRequest,

        onSuccess:(data)=>{
            //console.log("Email Verify successfully", data);
            toast.success("Email Verify successfully");
        },
        onError:(err)=>{
            //console.log("Error in verifying Email", err);
            toast.error(err || "Something went wrong");
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        resetPassword: resetPasswordMutution
    }
}