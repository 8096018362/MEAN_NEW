var userController = require('../controllers/user-controller');

var response = {
    status: "Success",
    message: null,
    data: []
}

var errorResponse = {
    status: "Failure",
    message: null
}
var USER = {

    userProfileUpdate: function(req, res) {
        var reqBody = req.body;
        userController.UserProfileUpdate(reqBody, function(CtrlRes, err) {
            if (err) {
                errorResponse.message = err;
                return res.json(errorResponse);
            } else {
                response.message = "Successfully user address updated ";
                response.data = CtrlRes;
                return res.json(response);
            }
        })
    }

}


module.exports = USER;


