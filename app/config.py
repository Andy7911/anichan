import os

class Config:
    ROOT_PATH = os.path.dirname(os.path.abspath(__file__))
    STATIC_IMG_PATH = os.path.join(ROOT_PATH, 'static', 'img')
    TITLE_PATH = os.path.join(STATIC_IMG_PATH, 'title')
    GIF_PATH = os.path.join(STATIC_IMG_PATH, 'gif')
    MUSIC_PATH = os.path.join(STATIC_IMG_PATH, 'music')
    BOTTOM_PATH = os.path.join(STATIC_IMG_PATH, 'bottom')
    THUMBNAIL_PATH = os.path.join(STATIC_IMG_PATH, 'thumbnail')
