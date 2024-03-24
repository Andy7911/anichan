from flask import request,Blueprint,Flask
from model.anime import Media
from database.db_connect import get_session, get_engine
import os

app = Flask(__name__);


animeRoute = Blueprint('animeRoute',__name__);


    