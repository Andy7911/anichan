
from flask import Flask
import os

app = Flask(__name__)

# Configurez le répertoire de stockage
app.config['UPLOAD_FOLDER'] = '/storage'