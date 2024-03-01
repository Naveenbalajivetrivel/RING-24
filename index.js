function login() {
    const userType = document.querySelector('input[name="usertype"]:checked').value;
    
    if (userType === "customer") {
        window.location.href = "customer.html"; // Redirect to customer page
    } else if (userType === "manufacturer") {
        window.location.href = "bussiness.html"; // Redirect to manufacturer page
    }
}
