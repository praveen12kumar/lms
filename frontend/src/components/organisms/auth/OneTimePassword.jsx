
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';


export default function OneTimePassword({isPending, isSuccess, error, value, setValue, onComplete}){
  
  const blockStyle = "w-10 md:w-14 h-10 md:h-14 rounded-lg border border-zinc-600 bg-zinc-700 text-center text-2xl";

  return (
    <div className='w-full h-dvh bg-zinc-800 flex flex-col gap-4 items-center justify-center'>
        <h2 className='text-2xl text-white font-medium'>OTP Verification</h2>
        <p className='text-white/40 text-sm'>Enter the OTP sent to your email</p>
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
      error && (<p className='text-red-500 text-sm'>{error}</p>)
    }
    {
      isSuccess && (<p className='text-green-500 text-sm'>OTP verified successfully</p>)
    }
    <p className='text-white/40 text-sm'>Please do not refresh the page</p>

    </div>
  )
}


