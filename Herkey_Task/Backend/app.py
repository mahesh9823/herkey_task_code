from flask import Flask
from controllers.signIn import signIn
from controllers.keySearch import keySearch
from controllers.weatherSearch import weatherSearch

app = Flask(__name__)


app.add_url_rule("/signIn", methods=["POST"],
                 view_func=signIn)

app.add_url_rule("/keySearch", methods=["GET"],
                 view_func=keySearch)

app.add_url_rule("/weatherSearch", methods=["GET"], view_func=weatherSearch)

if __name__ == '__main__':
    app.run(debug=True)
