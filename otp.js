function openOtpPopup() {
    document.getElementById('otpPopup').style.display = 'block';
}

function closeOtpPopup() {
    document.getElementById('otpPopup').style.display = 'none';
}

function submitOtp() {
    const otp = document.getElementById('otpInput').value;
    if (otp.length === 6) {
        alert('OTP submitted successfully!');
        closeOtpPopup();
    } else {
        alert('Please enter a valid 6-digit OTP.');
    }
}
let resendTimerEl = document.getElementById('resendTimer');
let resendOtpBtn = document.getElementById('resendOtpBtn');
 function openOtpPopup(event) {
         event.preventDefault(); // Prevent form submission
         document.getElementById('otpPopup').style.display = 'flex';
         startResendTimer();
         return false; // Prevent form submission
     }

function closeOtpPopup() {
    document.getElementById('otpPopup').style.display = 'none';
}

function submitOtp() {
    const otp = document.getElementById('otpInput').value;
    if (otp.length === 6) {
        alert('OTP submitted successfully!');
        closeOtpPopup();
        document.getElementById('registerForm').submit(); // Submit the registration form
    } else {
        alert('Please enter a valid 6-digit OTP.');
    }
}
function startResendTimer() {
    let seconds = 30;
    resendOtpBtn.disabled = true;
    resendTimerEl.textContent = seconds;

    let countdown = setInterval(() => {
        seconds--;
        resendTimerEl.textContent = seconds;

        if (seconds <= 0) {
            clearInterval(countdown);
            resendOtpBtn.disabled = false;
        }
    }, 1000);
}

function resendOtp() {
    // Logic to resend OTP goes here
    startResendTimer(); // Restart timer after clicking resend
}
function submitOtp() {
    // Replace with your OTP verification logic
    var enteredOtp = document.getElementById("otpInput").value;
    var correctOtp = "123456"; // Example correct OTP, replace with your logic

    if (enteredOtp === correctOtp) {
        displaySuccessMessage();
        redirectToUserPortal();
    } else {
        alert("Incorrect OTP. Please try again.");
    }
}
function displaySuccessMessage() {
    alert("Registered Successfully!");
}

// Function to redirect to user portal (replace 'userportal.html' with your actual user portal page)
function redirectToUserPortal() {
    window.location.href = "personal.html";
}
