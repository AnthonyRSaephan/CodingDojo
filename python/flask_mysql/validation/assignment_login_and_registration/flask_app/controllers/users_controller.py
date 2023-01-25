from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models import user_model
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
@app.route('/login_register')
def login_register():
    return render_template('login_register.html')

@app.route('/users/login', methods=['POST'])
def users_login():
    is_valid = user_model.User.validate_login(request.form)
    if not is_valid:
        return redirect("/login_register")
    user = user_model.User.get_user_by_email(request.form['email'])
    session["id"] = user.id
    session["first_name"] = user.first_name

    return redirect("/dashboard")


@app.route('/users/register', methods=['POST'])
def users_register():
    is_valid = user_model.User.validate_user(request.form)
    if not is_valid:
        return redirect("/login_register")
    user_id = user_model.User.create(request.form)
    session["first_name"] = request.form["first_name"]
    session["last_name"] = request.form["last_name"]
    session["email"] = request.form["email"]
    session["id"] = user_id
    return redirect("/dashboard")

@app.route("/dashboard")
def dashboard():
    if "id" not in session:
        return redirect("/login_register")
    
    return render_template("dashboard.html")

@app.route("/logout", methods=['POST'])
def logout():
    session.clear()
    return redirect("/login_register")
