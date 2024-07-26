
function showModal() {
    document.getElementById('registrationModal').style.display = 'block';
}
// Function to close the registration modal
function closeModal() {
    document.getElementById('registrationModal').style.display = 'none';
}

// Function to open the OTP popup
function openOtpPopup(event) {
    event.preventDefault();
    document.getElementById('otpPopup').style.display = 'block';
    return false;
}

// Function to close the OTP popup
function closeOtpPopup() {
    document.getElementById('otpPopup').style.display = 'none';
}
function openOtpPopup(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('otpPopup').style.display = 'flex';
    startResendTimer();
    return false; // Prevent form submission
}
