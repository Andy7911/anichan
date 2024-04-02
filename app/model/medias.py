from sqlalchemy import create_engine, Column,Enum, Integer, String, Sequence,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker,relationship,mapped_column
from model.anime import Anime as AnimeBase

import enum

class ImageType(enum.Enum):
    background_gif = 'background_gif'
    music = 'music'
    imageTitle = 'imageTitle'
    imageBottom = 'imageBottom'
    thumnail = "thumnail"


# Déclarer la classe de base pour les modèles
Base = declarative_base()

# Définir le modèle User
class Media(Base):
    __tablename__ = 'medias'
    id = Column(Integer,primary_key=True)
    filename = Column(String(50), unique=True, nullable=False)
    filepath = Column(String, nullable=False)
    size = Column(Integer)
    type = Column(Enum(ImageType))
    anime_id = Column(Integer,ForeignKey(AnimeBase.id))
    anime = relationship("Anime", back_populates="medias")
