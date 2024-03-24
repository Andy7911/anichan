from sqlalchemy import create_engine,column,Integer,String,PrimaryKeyConstraint
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Genre(Base):
  __tablename__ = 'genre'
id = column(Integer,primary_key=True)
name = column(String, primary_key=True)



