var bcrypt = require('bcrypt');

exports.ecryptPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

exports.comparePassword = async function(plainPassword, hashedPassword) {
    const result = await bcrypt.compare(plainPassword, hashedPassword);
    return result;
};