
exports.generateOtp = () => {
    // Generate a 4 digit random number
    return Math.floor(1000 + Math.random() * 9000).toString();
}
