from flask import Flask, render_template
app = Flask(__name__)

@app.route("/play")
def play():
    return render_template("bonus.html", repeat = 3, color = "skyblue")

@app.route("/play/<int:repeat>")
def play_repeat(repeat):
    return render_template("bonus.html", repeat = repeat, color = "skyblue")

@app.route("/play/<int:repeat>/<color>")
def play_repeat_color(repeat, color):
    return render_template("bonus.html", repeat = repeat, color = color)

if __name__ == "__main__":
    app.run(debug = True)