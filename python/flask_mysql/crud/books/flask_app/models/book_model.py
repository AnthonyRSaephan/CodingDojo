from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class Book:
    def __init__(self, data):
        self.id = data["id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.title = data["title"]
        self.num_of_pages = data["num_of_pages"]
    
    # ========================== CREATE =================================================================
    @classmethod
    def create_book(cls, data):
        query = """
            INSERT INTO books (title, num_of_pages)
            VALUES (%(title)s, %(num_of_pages)s);
        """
        print(data)
        return connectToMySQL(DATABASE).query_db(query, data)

    # ========================= READ =================================================================
    @classmethod
    def get_all_books(cls):
        query = """
            SELECT * FROM books;
        """

        results = connectToMySQL(DATABASE).query_db(query)
        if results:
            all_books = []
            for row in results:
                all_books.append(cls(row))
            return all_books
        return []


    # ========================= UPDATE =================================================================

    # ========================= DELETE =================================================================