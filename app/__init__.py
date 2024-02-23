
from flask import Flask
app = Flask(__name__)

# from app.routes.media import mediaRoute


# Configurez le répertoire de stockage
app.config['UPLOAD_FOLDER'] = '/storage'
from .views  import views
app.register_blueprint(views.blueprint)
# app.register_blueprint(mediaRoute)