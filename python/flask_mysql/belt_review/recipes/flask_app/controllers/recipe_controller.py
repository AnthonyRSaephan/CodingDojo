from flask_app import app
from flask import redirect, render_template, session, request
from flask_app.models.recipe_model import Recipe
from datetime import datetime

@app.route("/recipes")
def recipes():
    if "id" not in session:
        return redirect("/")
    user_recipe_list = Recipe.get_all_recipes()
    return render_template("recipes.html", user_recipe_list = user_recipe_list)

@app.route("/recipes/new")
def recipes_new():
    if "id" not in session:
        redirect("/")
    
    return render_template("recipes_new.html")

@app.route("/recipes/create", methods=["POST"])
def recipes_create():
    is_valid = Recipe.validate_recipe(request.form)
    if not is_valid:
        return redirect("/recipes/new")
    recipe_id = Recipe.create_recipe(request.form)
    return redirect("/recipes")

@app.route("/recipes/edit/<int:id>")
def recipes_edit_id(id):
    if "id" not in session:
        return redirect("/")
    recipe = Recipe.get_recipe_by_id(id)
    recipe.updated_at = datetime.strftime(recipe.updated_at, "%Y-%m-%d")

    return render_template("recipes_edit_id.html", recipe = recipe)

@app.route("/recipes/update/<int:id>", methods=["POST"])
def recipes_update_id(id):
    is_valid = Recipe.validate_recipe(request.form)
    if not is_valid:
        return redirect(f"/recipes/edit/{id}")
    data = {
        **request.form,
        "id": id,
    }
    Recipe.update_recipe(data)

    return redirect("/recipes")

@app.route("/recipes/delete/<int:id>")
def recipes_delete_id(id):
    Recipe.delete_recipe(id)
    return redirect("/recipes")

@app.route("/recipes/<int:id>")
def recipes_id(id):
    if "id" not in session:
        return redirect("/")
    user = Recipe.get_recipe_and_user(id)
    user.recipe.updated_at = datetime.strftime(user.recipe.updated_at, "%B %d, %Y")
    return render_template("recipes_id.html", user = user)