from flask import Flask, render_template, redirect, session, request
app = Flask(__name__)
app.secret_key = "key"

@app.route("/")
def root():
    print("Entered Root page")
    session.clear()
    return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():
    print("Process")
    for key in request.form:
        if key == "favorite_language":
            session[key] = request.form.getlist(key)
            continue
        session[key] = request.form.get(key)
    print(session)
    return redirect("/result")

@app.route("/result")
def result():
    print("Entered Results page")
    return render_template("result.html")

if __name__ == "__main__":
    app.run(debug = True)