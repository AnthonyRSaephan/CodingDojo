from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models import user_model
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def index():
    # if "id" in session:
    #     return redirect("/recipes")
    return render_template('index.html')

@app.route('/users/login', methods=['POST'])
def users_login():
    is_valid = user_model.User.validate_login(request.form)
    if not is_valid:
        return redirect("/")
    user = user_model.User.get_user_by_email(request.form['email'])
    session["id"] = user.id
    session["first_name"] = user.first_name
    session["last_name"] = user.last_name
    session["email"] = user.email
    return redirect("/recipes")


@app.route('/users/register', methods=['POST'])
def users_register():
    is_valid = user_model.User.validate_user(request.form)
    if not is_valid:
        return redirect("/")
    user_id = user_model.User.create(request.form)
    user = user_model.User.get_user_by_id(user_id)
    session["id"] = user.id
    session["first_name"] = user.first_name
    session["last_name"] = user.last_name
    session["email"] = user.email
    return redirect("/recipes")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")
