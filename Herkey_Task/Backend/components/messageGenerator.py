import json
from flask import make_response


def successResposne(message, data):
    response = make_response(json.dumps({
        "status": "Success",
        "message": message,
        "statusCode": "200",
        "data": data
    }),
        200)
    response.headers["Content-Type"] = "application/json"
    return response


def failureResponse(message):
    response = make_response(json.dumps({
        "status": "Failed",
        "message": message,
        "statusCode": "400",
        "data": None
    }), 200)
    response.headers["Content-Type"] = "application/json"
    return response
