const password_complexity = require('joi-password-complexity')
const Joi = require('joi')

function validateUser(user) {
    const userSchema =Joi.object({
        fullnames:  Joi.string().required(),
        phone:  Joi.string().required(),
        email:Joi.string().email().required(),
        password:password_complexity().required()
      

        
    })

    return userSchema.validate(user)
}
module.exports.validate = validateUser