from flask import Flask, session, redirect, render_template
app = Flask(__name__)
app.secret_key = "secret"

@app.route("/")
def index():
    if "count" in session:
        session["count"] += 1
    else:
        session["count"] = 1
    
    return render_template("index.html")

@app.route("/destroy_session")
def destroy_session():
    session.clear()

if __name__ == "__main__":
    app.run(debug = True)