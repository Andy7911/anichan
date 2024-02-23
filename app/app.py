from flask import Flask
from views.views import blueprint
from routes.media import mediaRoute

app = Flask(__name__)
app.register_blueprint(mediaRoute)
app.register_blueprint(blueprint)

# @app.route('/')
# def index():
#   return "Hello world!" #if you want to render a .html file, 
#                         # import render_template from flask and use 
#                         #render_template("index.html") here.

if __name__ == '__main__':
    app.debug = True
    app.run() #go to ht

