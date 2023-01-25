from flask import flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE, app
from flask_bcrypt import Bcrypt     
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
bcrypt = Bcrypt(app)

class User():

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.updated_at = data['updated_at']
        self.created_at = data['created_at']

    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO users (first_name, last_name, email, password)
            VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);
        """

        return connectToMySQL(DATABASE).query_db(query, data)

    
    @classmethod
    def get_all(cls):
        pass

    @classmethod
    def update(cls, data):
        query = """
            UPDATE users
            SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, password = %(password)s
            WHERE id = %(id)s;
        """

        data = {
            'id': data['id'], 
            'first_name': data['first_name'],
            'last_name': data['last_name'],
            'email': data['email'],
            'password': data['password']
        }

        connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete(cls, id):
        query = """
            DELETE FROM users
            WHERE id = %(id)s;
        """

        data = {
            "id" : id
        }

        connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_user_by_email(cls, email):
        query = """
            SELECT * FROM users
            WHERE email = %(email)s;
        """
        data = {
            "email" : email
        }

        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            for row in results:
                return cls(row)


    @staticmethod
    def validate_user(data):
        is_valid = True
        if data["first_name"] == "":
            flash("First name is required.")
            is_valid = False
        elif not data["first_name"].isalpha():
            flash("First name alphanumeric. only letters, numbers")
            is_valid = False
        elif len(data["first_name"]) < 2:
            flash("First name must be at least 2 characters.")
            is_valid = False
        elif len(data["first_name"]) > 255:
            flash("First name must be less than 255 characters.")
            is_valid = False
        
        if data["last_name"] == "":
            flash("Last name is required.")
            is_valid = False
        elif not data["last_name"].isalpha():
            flash("Last name alphanumeric. only letters, numbers")
            is_valid = False
        elif len(data["last_name"]) < 2:
            flash("Last name must be at least 2 characters.")
            is_valid = False
        elif len(data["last_name"]) > 255:
            flash("Last name must be less than 255 characters.")
            is_valid = False
        
        if not EMAIL_REGEX.match(data["email"]):
            flash("Email must be a valid email address.")
            is_valid = False
        if User.get_user_by_email(data["email"]):
            flash("Email already exists.")
            is_valid = False
        if len(data["password"]) < 8:
            flash("Password must be at least 8 characters.")
            is_valid = False
        if data["password"] != data["confirm_password"]:
            flash("Passwords do not match.")
            is_valid = False
        return is_valid

    @staticmethod
    def validate_login(data):
        is_valid = True
        user = User.get_user_by_email(data["email"])
        if not user:
            is_valid = False
        

        
        if is_valid == False:
            flash("Invalid Credentials")
        return is_valid


