export const validateEmail = (email: string) => {

    // Kiểm tra định dạng email
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    return regex.test(email)
}

export function validatePassword(password: string) {

    // Kiểm tra xem mật khẩu có ít nhất 8 ký tự
    if (password.length < 8) {

        return false;
    }

    // Kiểm tra ký tự đặc biệt
    const hasSpecialChar = /[!@#$%^&*]/.test(password)

    return hasSpecialChar;
}
