from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE, app
from flask_app.models import user_model
from flask import flash, session


class Recipe:
    def __init__(self, data):
        self.id = data["id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.name = data["name"]
        self.instructions = data["instructions"]
        self.description = data["description"]
        self.date_cooked_made = data["date_cooked_made"]
        self.under_30_minutes = data["under_30_minutes"]
        self.user_id = data["user_id"]

    # ============================== CREATE ===================================
    @classmethod
    def create_recipe(cls, data):
        query = """
            INSERT INTO recipes (name, description, instructions, date_cooked_made, under_30_minutes, user_id)
            VALUES (%(name)s, %(description)s, %(instructions)s, %(date_cooked_made)s, %(under_30_minutes)s, %(user_id)s);
        """

        data = {
            **data,
            "user_id": session["id"]
        }

        return connectToMySQL(DATABASE).query_db(query, data)

    # ============================== READ ===================================
    @classmethod
    def get_recipe_by_id(cls, id):
        query = """
            SELECT * FROM recipes
            WHERE recipes.id = %(id)s;
        """
        data = {"id": id}

        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            return cls(results[0])
        return False

    @classmethod
    def get_recipes_of_user(cls, id):
        query = """
            SELECT * FROM recipes
            WHERE recipes.user_id = %(id)s;
        """
        data = {"id": id}

        results = connectToMySQL(DATABASE).query_db(query, data)
        recipes = []
        if results:
            for row in results:
                recipe = cls(row)
                recipes.append(recipe)
            return recipes
        return False

    @classmethod
    def get_all_recipes(cls):
        query = """
            SELECT * FROM users
            JOIN recipes
            ON recipes.user_id = users.id;
        """

        results = connectToMySQL(DATABASE).query_db(query)
        user_recipe_list = []
        if results:
            for row in results:
                user = user_model.User(row)
                recipe_data = {
                    **row,
                    "id": row["recipes.id"],
                    "created_at": row["recipes.created_at"],
                    "updated_at": row["recipes.updated_at"],
                }
                recipe = cls(recipe_data)
                user_recipe_list.append([user, recipe])
            return user_recipe_list
        return []
    
    @classmethod
    def get_recipe_and_user(cls, recipe_id):
        query = """
            SELECT * FROM recipes
        JOIN users
        ON recipes.user_id = users.id
        WHERE recipes.id = %(id)s;
        """

        data = {
            "id": recipe_id
        }

        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            user_data = {
                **results[0],
                "id": results[0]["users.id"],
                "created_at": results[0]["users.created_at"],
                "updated_at": results[0]["users.updated_at"],
            }
            user = user_model.User(user_data)
            recipe = cls(results[0])
            user.recipe = recipe
            return user

        return False
    # ============================== UPDATE ===================================
    @classmethod
    def update_recipe(cls, data):
        query = """
            UPDATE recipes
            SET
            name = %(name)s,
            description = %(description)s,
            instructions = %(instructions)s,
            date_cooked_made = %(date_cooked_made)s,
            under_30_minutes = %(under_30_minutes)s
            WHERE id = %(id)s
        """

        connectToMySQL(DATABASE).query_db(query, data)


    # ============================== DELETE ===================================
    @classmethod
    def delete_recipe(cls, id):
        query = """
            DELETE FROM recipes WHERE id = %(id)s;
        """

        data ={
            "id": id
        }

        connectToMySQL(DATABASE).query_db(query, data)

    # ============================== VALIDATION ===================================
    @staticmethod
    def validate_recipe(data):
        is_valid = True
        if data["name"] == "":
            flash("Name is required.", "new_recipe")
            is_valid = False
        elif len(data["name"]) < 3:
            flash("Name must be at least 3 characters.", "new_recipe")
            is_valid = False
        elif len(data["name"]) > 255:
            flash("Name must be less than 255 characters.", "new_recipe")
            is_valid = False

        if data["description"] == "":
            flash("Description is required.", "new_recipe")
            is_valid = False
        elif len(data["description"]) < 3:
            flash("Description must be at least 3 characters.", "new_recipe")
            is_valid = False

        if data["instructions"] == "":
            flash("Instructions are required.", "new_recipe")
            is_valid = False
        elif len(data["instructions"]) < 3:
            flash("Instructions must be at least 3 characters.", "new_recipe")
            is_valid = False

        if data["date_cooked_made"] == "":
            flash("Date Cooked/Made is required.", "new_recipe")
            is_valid = False
        
        if "under_30_minutes" not in data:
            flash("Under 30 minutes is required.", "new_recipe")
            is_valid = False
        
        return is_valid
