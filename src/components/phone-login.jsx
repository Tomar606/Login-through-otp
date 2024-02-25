import { useState } from "react";
import OTPfield from "./otp-field";

const PhoneOTPForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOTPfield, setShowOTPfield] = useState(false)
   
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };
    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        //phone validation
        const regex = /[^0-9]/g;
        if(phoneNumber.length<10 || phoneNumber.length>10 || regex.test(phoneNumber)){
            alert("Invalid Phone Number");
            return;
        }

        // Call Be Api
        // show otp field
        setShowOTPfield(true);
    };

const onOTPSubmit = (OTP) => {
    console.log("Login Successfull", OTP)
};

    return (
    <div className="full">
        <div className="title">
            Login via OTP
        </div>
        {!showOTPfield? (
        <form onSubmit={handlePhoneSubmit}>
            <input className="phoneenter"
             type="text"
             value={phoneNumber} 
           onChange={handlePhoneNumber}
           placeholder="Enter Phone Number" 
           />
           <div>
           <button className="button" type="submit">Send OTP</button>
           </div>
        </form>
        ):(
        <div>
            <p className="lol">Enter OTP sent to { phoneNumber }</p>
            <OTPfield length={4} onOTPSubmit={onOTPSubmit} />
        </div>
        )}
    </div>
    )
};

export default PhoneOTPForm;