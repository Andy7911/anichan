from sqlalchemy import create_engine, Column,Enum,Integer, String,DateTime, Sequence,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum

# Déclarer la classe de base pour les modèles
Base = declarative_base()




class Anime(Base):
   __tablename__ = 'anime'
   id = Column(Integer,primary_key=True)
   title = Column(String, nullable=False)
   description = Column(String,nullable=False)
   genre = Column(String(50),nullable=False)
   popularite =Column(Integer,default=0)
   date = Column(DateTime,default=func.now())
  





  
 