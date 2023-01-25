from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models import user_model

@app.route('/')
@app.route('/login_register')
def login_register():
    return render_template('login_register.html')

@app.route('/users/login', methods=['POST'])
def users_login():
    pass

@app.route('/users/register', methods=['POST'])
def users_register():
    is_valid = user_model.User.validate_user(request.form)
    if not is_valid:
        return redirect("/login_register")
    user_model.User.create(request.form)
    session["first_name"] = request.form["first_name"]
    session["last_name"] = request.form["last_name"]
    session["email"] = request.form["email"]
    session["id"] = request.form["id"]
    return render_template("/dashboard.html")