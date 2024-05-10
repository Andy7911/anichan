import os
from flask import Flask

app = Flask(__name__)  # Note: Use single underscore on each side of name

class Config:
    ROOT_PATH = os.path.dirname(os.path.abspath(__file__))
    STATIC_IMG_PATH = os.path.join(ROOT_PATH, 'static', 'img')
    TITLE_PATH = os.path.join(STATIC_IMG_PATH, 'title')
    GIF_PATH = os.path.join(STATIC_IMG_PATH, 'gif')
    MUSIC_PATH = os.path.join(STATIC_IMG_PATH, 'music')
    BOTTOM_PATH = os.path.join(STATIC_IMG_PATH, 'bottom')
    THUMBNAIL_PATH = os.path.join(STATIC_IMG_PATH, 'thumbnail')
    HERO_PATH = os.path.join(STATIC_IMG_PATH,'hero' )

    @staticmethod
    def init_app(app):
        app.config['UPLOAD_FOLDER'] = Config.TITLE_PATH
        app.config['UPLOAD_GIF'] = Config.GIF_PATH
        app.config['UPLOAD_MUSIC'] = Config.MUSIC_PATH
        app.config['UPLOAD_BOTTOM'] = Config.BOTTOM_PATH
        app.config['UPLOAD_THUMB'] = Config.THUMBNAIL_PATH
        app.config['UPLOAD_HERO'] = Config.HERO_PATH
Config.init_app(app)

# Define file_paths dictionary after Config has initialized app configurations
file_paths = {
    'image_thumbnail': app.config['UPLOAD_FOLDER'],
    'image_title': app.config['UPLOAD_FOLDER'],
    'image_gif': app.config['UPLOAD_GIF'],
    'music': app.config['UPLOAD_MUSIC'],
    'image_bottom': app.config['UPLOAD_BOTTOM'],
    'image_hero': app.config['UPLOAD_HERO']
}