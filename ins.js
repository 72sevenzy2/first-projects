function generatepass(length, allowlowercase, allowuppercase, allownumbers, allowsymbols) {
    const lowercasechars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercasechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberchars = '0123456789';
    const symbolchars = '!@#$%^&*'

    let allowedchars = "";
    let password = "";

    allowedchars += allowlowercase ? lowercasechars : "";
    allowedchars += allowuppercase ? uppercasechars : "";
    allowedchars += allowsymbols ? symbolchars : "";
    allowedchars += allownumbers ? numberchars : "";

    if (length <= 0) {
        return 'password must have more characters';
    }
    if (allowedchars.length === 0) {
        return 'you must atleast select 1 character for a password';
    }
}

const passlength = 12;
const allowuppercase = true;
const allowlowercase = true;
const allownumbers = true;
const allowsymbols = true;

const password = generatepass(passlength, allowlowercase, allowuppercase, allownumbers, allowsymbols)

console.log(password);