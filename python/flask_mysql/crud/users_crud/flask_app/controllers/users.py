from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import User

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
    user_id = User.add_user(request.form)
    return redirect("/users")

@app.route("/users/<int:id>")
def users_id(id):
    user = User.get_user(id)
    user_data = {
        "id" : user.id,
        "first_name" : user.first_name,
        "last_name" : user.last_name,
        "email" : user.email,
        "created_at" : user.created_at,
        "updated_at" : user.updated_at
    }
    return render_template("users_read.html", user = user_data)

@app.route("/users/<int:id>/edit")
def users_id_edit(id):
    user = User.get_user(id)
    user_dict = {
        "id" : user.id,
        "first_name" : user.first_name,
        "last_name" : user.last_name,
        "email" : user.email,
    }
    return render_template("edit.html", user = user_dict)

@app.route("/user/update", methods=["post"])
def user_update():
    User.update_user(request.form)
    return redirect("/users")

@app.route("/user/delete/<int:id>")
def user_delete_id(id):
    User.delete_user(id)
    return redirect("/users")