from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.book_model import Book

@app.route("/books")
def books():
    all_books = Book.get_all_books()
    return render_template("books.html", all_books=all_books)

@app.route("/books/create", methods=["POST"])
def books_create():
    book_id = Book.create_book(request.form)
    return redirect("/books")
