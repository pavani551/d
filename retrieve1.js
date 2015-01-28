var UserModel = require("./posts")

UserModel.findOne({"username":"pavani"},{"password":1,"_id":0}, function (err,user) {
  if(user){
        console.log("userObj retrieved successfully--->>>",user);
		
		{		if(user.password=="pasula1")

			console.log("sucess",user);
		}

		
    }
	else
	{
 console.log("Don't have user with given name");
	}
});