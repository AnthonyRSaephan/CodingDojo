from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello World!"

@app.route("/dojo")
def say_dojo():
    return "Dojo!"

@app.route("/say/<string:name>")
def say_name(name):
    return f"Hi {name.title()}!"

@app.route("/repeat/<int:times>/<string:name>")
def repeat_times(name, times):
    return name * times

@app.route("/", defaults = {"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    return "Sorry! No response. Try again."

if __name__ == "__main__":
    app.run(debug = True)