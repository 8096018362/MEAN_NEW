var userModel = require('../models/users_model');

var USERCONTROLLERS = {

    UserProfileUpdate: function(userObj, callback) {
        userModel.findOne({ mobile_number: userObj.mobile_number }, function(err, userData) {
            if (err) {
                callback(null, 'error in database')
            }
            if (userData) {
                userData.address.hno = userObj.hno;
                userData.address.street = userObj.street;
                userData.address.pincode = userObj.pincode;
                userData.profile.date_of_birth = userObj.dateOfBirth;
                userData.profile.date_of_marriage = userObj.marriageDate;
                userData.save(function(err, user) {
                    if (err) {
                        callback(null, 'error in sending obj')
                    }
                    if (user) {
                        callback(userData, null)
                    }
                })
            } else {
                callback(null, 'No user avilable under this mobile number')
            }
        })
    }

}

module.exports = USERCONTROLLERS;