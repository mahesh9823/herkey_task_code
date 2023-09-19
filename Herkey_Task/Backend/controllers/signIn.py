import traceback
from flask import request
from components import db
from components import messageGenerator


def signIn():
    try:

        reqBody = request.get_json()
        username = reqBody["email"]
        password = reqBody["password"]

        data = db.getData("userCollection", {
            "email": username, "password": password}, {"uid": 1, "_id":0})
        if len(data) > 0:

            return messageGenerator.successResposne(
                "Login Successful", data[0])
        else:
            return messageGenerator.failureResponse("Login Failed")
    except:

        return messageGenerator.failureResponse(str(traceback.format_exc()))
