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
    print("Session cleared")
    return redirect("/")

@app.route("/2")
def add_two():
    session["count"] += 1
    return redirect("/")

@app.route("/increment_by")
def increment_by():
    print(session.get("increment_by"))
    current = session["count"]
    if "increment_by" in session:
        increment = int(session["increment_by"])
        current = int(current)
        current = current + increment - 1
        session["count"] = current
        return redirect("/")
    else:
        current = int(current)
        current -= 1
        session["count"] = current
        return redirect("/")



if __name__ == "__main__":
    app.run(debug = True)