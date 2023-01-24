from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.dojo_model import Dojo
from flask_app.models.ninja_model import Ninja

@app.route("/ninjas") # create ninjas page
def ninjas():
    all_dojos = Dojo.get_all_dojos()
    return render_template("ninjas.html", all_dojos = all_dojos)

@app.route("/create_ninja", methods=["post"])
def create_ninja():
    new_ninja = Ninja.create_ninja(request.form)
    return redirect("/dojos")