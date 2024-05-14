import { useEffect, useState,useRef } from "react";
import * as apiService from "../../services";
import { toast } from 'react-toastify';

const OTPverification = () => {
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setUseremail] = useState("");
  const [verifyApiData,setVerifyApiData] = useState([]);
  const [sendmsg,setsendmsg] =useState("");
  
  const [otpError, setOtpError] = useState("");

  useEffect(() => { 
    setUsername(localStorage.getItem("username"));
    setUseremail(localStorage.getItem("email"));
  },[])

  const fetchDataVerifyOtp = async () => {
    try {
      const data = await apiService.verifyOtp({
        userName: username,
        otp: otp,
      });
      setVerifyApiData(data);

      if(data.data === null){
        // setOtpError(data.error.message);
        toast(data.error.message);
        return;
      }

      if (data.data.accessToken && data.data.refreshToken) {
        localStorage.setItem('accessToken', data.data.accessToken);
        localStorage.setItem('refreshToken', data.data.refreshToken);
      } else {
        console.error('Error: Invalid response data');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  // submit btn fucntion
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername(localStorage.getItem("username"));
      // Form validation
      if (!otp || otp.length !== 6) {
        // setOtpError("");
        toast("Please enter a valid OTP (6 digits)")
        return;
      }

      setOtpError("");
      
    console.log("otp sent");
     fetchDataVerifyOtp();
  };

  const inputs = useRef([]);

  const handleInputChange = (index, e) => {
    const value = e.target.value;
  
    // Restrict input to only one character
    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }
  
    // Move cursor to the next input box if there is a value
    if (value.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  
    // Update the OTP state
    const updatedOtp = inputs.current.map(input => input.value).join('');
    setOtp(updatedOtp);
    setOtpError("");
  }
  
  const handleKeyDown = (index, e) => {
    // If the user pressed the backspace key and the current input box is empty,
    // move the focus to the previous input box
    if (e.keyCode === 8 && e.target.value === "" && index > 0) {
      e.preventDefault(); // Prevent default behavior of the backspace key
      inputs.current[index - 1].focus(); // Move focus to the previous input box
    }
  }
  

  const fetchDataResendOtp = async () => {
    try {
      const data = await apiService.resendOtp({
        userName: username,
      });
      setsendmsg(data.error.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const resendBtn = (e) => {
    e.preventDefault();
    setUsername(localStorage.getItem("username"));

    fetchDataResendOtp();
  };

  return (
    <>
      <section className="otpverification" style={{ display: "none" }}>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="mb-5 mt-5 border-0">
              <div className="card-body text-center">
                <h5>OTP Verification</h5>
                <div className="text-muted">
                OTP sent successfully to the email {email}
                </div>
              
                <form onSubmit={handleSubmit}>
                  <div className="otp-field">
                  {[...Array(6)].map((_, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputs.current[index] = el)}
                        id={`otpinput${index + 1}`}
                        type="number"
                        maxLength={1}
                        onChange={(e) => handleInputChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)} // Add this line
                      />
                  ))}

                    <input type="number" className="d-none" />
                  </div>

                  <div className="error-message text-danger my-2">{otpError}</div>
                

                  <div className="mb-1 text-muted">Didn't recieve OTP code? </div>
                  <div className="resendOTP">
                    {" "}
                    <a href="#" onClick={resendBtn}>Resend Code </a>{" "}
                    <p>{sendmsg}</p>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      href="/Home"
                      className="btn btn-primary w-100 verify"
                      type="submit"
                    >
                      {" "}
                      Verify & Proceed{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OTPverification;