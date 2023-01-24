from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.dojo_model import Dojo

@app.route('/')
def index():
    return redirect("/dojos")

@app.route("/dojos")
def dojos():
    dojos = Dojo.get_all_dojos()
    return render_template("dojos.html", all_dojos = dojos)

@app.route("/dojos/create", methods=["post"])
def dojos_create():
    Dojo.create_dojo(request.form["name"])
    return redirect("/dojos")

@app.route("/dojos/<int:id>")
def dojos_id(id):
    all_ninjas = Dojo.get_all_users_from_dojo(id)
    dojo = Dojo.get_dojo(id)
    return render_template("dojos_show.html", all_ninjas = all_ninjas, dojo=dojo)