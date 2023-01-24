from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import ninja_model

class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.name = data["name"]
        # self.ninjas = []
    
    @classmethod
    def get_all_dojos(cls):
        query = """
            SELECT * FROM dojos;
        """
        results = connectToMySQL(DATABASE).query_db(query)
        all_dojos = []
        if results:
            for row in results:
                all_dojos.append(cls(row))
            return all_dojos
        return False
    
    @classmethod
    def create_dojo(cls, name):
        query = """
            INSERT INTO dojos (name)
            VALUES (%(name)s);
        """

        data = {
            "name" : name
        }

        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_all_users_from_dojo(cls, id):
        query = """
            SELECT * FROM ninjas
            JOIN dojos
            ON ninjas.dojo_id = dojos.id
            WHERE ninjas.dojo_id = %(id)s;
        """
        data = {
            "id" : id
        }

        results = connectToMySQL(DATABASE).query_db(query, data)
        all_ninjas = []
        if results:
            for row in results:
                all_ninjas.append(ninja_model.Ninja(row))
            return all_ninjas
        return False
    
    @classmethod
    def get_dojo(cls, id):
        query = """
            SELECT * FROM dojos
            WHERE dojos.id = %(id)s;
        """

        data = {
            "id" : id
        }

        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            return results[0]
        return False
