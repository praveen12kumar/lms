
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';


export default function OneTimePassword({isPending, isSuccess, error, value, setValue, onComplete}){
  
  const blockStyle = "w-10 md:w-14 h-10 md:h-14 rounded-lg text-zinc-800 bg-white text-center text-2xl";

  return (
    <div className='w-full h-full'>
        <h2 className='text-3xl text-zinc-800 font-medium text-center mb-4'>OTP Verification</h2>
        <p className='text-zinc-500 text-center mb-2 text-sm'>Enter the OTP sent to your email</p>
        <InputOTP 
          maxLength={6} 
          pattern={REGEXP_ONLY_DIGITS}
          value={value}
          onChange={setValue}
          onComplete={onComplete}
          disabled={isPending}
          
          >
        <InputOTPGroup className="text-white text-2xl font-bold gap-2">
          <InputOTPSlot index={0} className={blockStyle} />
          <InputOTPSlot index={1} className={blockStyle}/>
          <InputOTPSlot index={2} className={blockStyle}/>
          <InputOTPSlot index={3} className={blockStyle}/>
          <InputOTPSlot index={4} className={blockStyle}/>
          <InputOTPSlot index={5} className={blockStyle}/>
        </InputOTPGroup>
    </InputOTP>
    {
      true && (<p className='text-red-700 text-md font-medium mt-4 text-center'>{error}</p>)
    }
    {
      isSuccess && (<p className='text-green-800 text-md font-medium mt-4 text-center'>OTP verified successfully</p>)
    }
    <p className='text-zince-800 text-sm text-center mt-4'>Please do not refresh the page</p>

    </div>
  )
}


