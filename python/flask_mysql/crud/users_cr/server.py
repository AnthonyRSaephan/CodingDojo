from flask import Flask, render_template, redirect, session, request
from user_model import User

app = Flask(__name__)
app.secret_key = "secret"

@app.route("/")
def root():
    return redirect("/users")

@app.route("/users")
def users():
    all_users = User.all_users() # returns a list of user objects
    return render_template("all.html", all_users = all_users)

@app.route("/users/new")
def users_new():
    return render_template("create.html")

@app.route("/user/create", methods=["post"])
def user_create():
    print(request.form)
    user_id = User.add_user(request.form)
    return redirect("/users")


if __name__ == "__main__":
    app.run(debug = True)