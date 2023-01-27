from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import book_model

class Author:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.favorite_books = []
    
    # ==================== CREATE =====================
    @classmethod
    def create_author(cls, data):
        query = """
            INSERT INTO authors (name)
            VALUES (%(name)s);
        """

        return connectToMySQL(DATABASE).query_db(query, data)

    # ==================== READ =================

    @classmethod
    def get_all_authors(cls):
        query = """
            SELECT * FROM authors;
        """

        results = connectToMySQL(DATABASE).query_db(query)
        if results:
            author_list = []
            for row in results:
                author_list.append(cls(row))
            return author_list
        return []
    
    @classmethod
    def get_author_by_id(cls, id):
        query = """
            SELECT * FROM authors
            LEFT JOIN favorites
            ON authors.id = favorites.author_id
            LEFT JOIN books
            ON favorites.book_id = books.id
            WHERE authors.id = %(id)s;
        """

        data = {
            "id": id
        }

        results = connectToMySQL(DATABASE).query_db(query, data)
        if results:
            author = cls(results[0])
            for row in results:
                book_data = {
                    **row,
                    "id" : row["books.id"],
                    "created_at": row["books.created_at"],
                    "updated_at": row["books.updated_at"],
                }
                new_book = book_model.Book(book_data)
                author.favorite_books.append(new_book)
            return author
        return False



    # ==================== UPDATE =====================

    # ==================== DELETE =====================