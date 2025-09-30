import { useMutation } from "@tanstack/react-query";
import { changePasswordRequest } from "@/apis/auth";
import toast from "react-hot-toast";


export const useChangePassword = () =>{
    const {isPending, isSuccess, error, mutateAsync: changePasswordMutution} = useMutation({
        mutationFn: changePasswordRequest,

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
        changePassword: changePasswordMutution
    
        }
}