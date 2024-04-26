from sqlalchemy import create_engine, Column,Enum,Integer, String,DateTime, Sequence,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

import enum

# Déclarer la classe de base pour les modèles
Base = declarative_base()

class AnimeCategorie(enum.Enum):
    vedette = 'vedette'
    regular = 'regular'
    recommended = 'recommended'
   

class Anime(Base):
   __tablename__ = 'anime'
   id = Column(Integer,primary_key=True)
   title = Column(String(50), nullable=False)
   description = Column(String(300),nullable=False)
   notation = Column(Integer,default=30)
   categorie = Column(Enum(AnimeCategorie,native_enum=False, create_type=False ))
   medias = relationship('Media', back_populates='anime')

#    date = Column(DateTime,default=func.now())
   
  





  
 