from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self, data) -> None:
        self.id = data.get("id")
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.created_at = data.get("created_at")
        self.updated_at = data.get("updated_at")
    
    @classmethod
    def all_users(cls):
        query = "SELECT * FROM users"
        results = connectToMySQL("users_schema").query_db(query)
        all_users = []
        for user_data in results:
            new_user = cls(user_data)
            all_users.append(new_user)
        return all_users

    @classmethod
    def add_user(cls, data):
        query = """
            INSERT INTO users (first_name, last_name, email)
            VALUES (%(first_name)s, %(last_name)s, %(email)s);
        """
        user_dict = {
            "first_name" : data.get("first_name"),
            "last_name" : data.get("last_name"),
            "email" : data.get("email")
        }
        user_id = connectToMySQL('users_schema').query_db(query, user_dict)
        return user_id
    
    @classmethod
    def get_user(cls, id):
        query = """
            SELECT * FROM users
            WHERE id = %(id)s;
        """
        dict = {
            "id" : id
        }

        user_dict = connectToMySQL('users_schema').query_db(query, dict)
        print(user_dict[0])
        user = cls(user_dict[0])
        return user

    @classmethod
    def update_user(cls, data):
        query = """
            UPDATE users
            SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s
            WHERE id = %(id)s;
        """
        data = {
            "first_name" : data.get("first_name"),
            "last_name" : data.get("last_name"),
            "email" : data.get("email"),
            "id" : data.get("id")
        }

        connectToMySQL('users_schema').query_db(query, data)

    @classmethod
    def delete_user(cls, id):
        query = """
        DELETE FROM users WHERE id = %(id)s
        """

        data = {
            "id" : id
        }

        connectToMySQL('users_schema').query_db(query, data)