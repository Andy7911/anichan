from sqlalchemy import create_engine, Column,Enum,Integer, String,DateTime, Sequence,ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum

# Déclarer la classe de base pour les modèles
Base = declarative_base()




class Utilisateur(Base):
   __tablename__ = 'utilisateur'
   id = Column(Integer,primary_key=True)
   name = Column(String(50), nullable=False)
   email = Column(String(50),nullable=False)
   password = Column(String(50),nullable=False)
  