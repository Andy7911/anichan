import psycopg2
from psycopg2 import OperationalError
import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
 

class Database:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super().__new__(cls)
            cls._instance.connect()
        return cls._instance

    def connect(self):
        try:

            self.engine = create_engine('postgresql://postgres:anichan123@localhost:5432/anichan')
        # Créer une Session pour interagir avec la base de données
            self.Session = sessionmaker(bind=self.engine)
        # Créer une base pour les modèles SQLAlchemy
            self.Base = declarative_base()
            print("Connexion réussie à la base de données PostgreSQL")
        except OperationalError as e:
            print("Erreur lors de la connexion à la base de données PostgreSQL:", e)
    
    
    def get_session(self):
        return self.Session()

    def get_engine(self):
        return self.engine

    def get_base(self):
        return self.Base

    # Ajoutez d'autres méthodes pour interagir avec votre base de données ici
