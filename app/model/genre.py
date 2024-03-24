from sqlalchemy import create_engine,Column,Integer,String,PrimaryKeyConstraint
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Genre(Base):
  __tablename__ = 'genre'
  id = Column(Integer,primary_key=True)
  title = Column(String,nullable=True)



