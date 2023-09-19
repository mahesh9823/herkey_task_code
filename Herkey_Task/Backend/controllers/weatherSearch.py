import traceback
from flask import request
from components import db
from components import messageGenerator
import requests


def weatherSearch():
    try:
        args = request.args.to_dict()

        uidCheck = db.getData("userCollection", {"uid": args["uid"]})

        if len(uidCheck) > 0:

            if args["type"] == "1":
                data = db.getData("weatherCollection", None)
                return messageGenerator.successResposne(
                    "Success", data)
            elif args["type"] == "2":
                key = args["key"]
                res = requests.get(
                    f'http://dataservice.accuweather.com/forecasts/v1/daily/1day/{key}?apikey=AdwIcNFtArscJXhqSZ046BUB9SAA7HbE')

                state = db.insertData("weatherCollection", {
                    "uid": args["uid"],
                    "statusCode": res.status_code,
                    "response": res.json()
                })

                if state == True:
                    return messageGenerator.successResposne("Search Result", {
                        "uid": args["uid"],
                        "statusCode": res.status_code,
                        "response": res.json()
                    })
                else:
                    return messageGenerator.failureResponse("Something went wrong while updating to db")

            else:
                return messageGenerator.failureResponse("Type not allowed")
        else:
            return messageGenerator.failureResponse("User is not registered")

    except:

        return messageGenerator.failureResponse(str(traceback.format_exc()))
