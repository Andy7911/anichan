from sqlalchemy import create_engine, Column, Integer, String, Sequence,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



# Déclarer la classe de base pour les modèles
Base = declarative_base()

class Anime(Base):
   __tablename__ = 'anime'
   anime_id = Column(Integer,primary_key=True)
   title = Column(String, nullable=False)
   description = Column(String,nullable=False)
   genre = Column(String(50),nullable=False)
   image = Column(Integer,ForeignKey('images.image_id'))


  
 