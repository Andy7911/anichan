from sqlalchemy import create_engine, Column, Integer, String, Sequence,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship,mapped_column
from model.genre import genre

# Déclarer la classe de base pour les modèles
Base = declarative_base()

class Anime(Base):
   __tablename__ = 'anime'
   id = Column(Integer,primary_key=True)
   title = Column(String, nullable=False)
   description = Column(String,nullable=False)
   genre = Column(String(50),nullable=False)
  





  
 