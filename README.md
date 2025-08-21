# Hospital Management System

A Django-based web application for managing hospital operations, including doctor profiles, patient records, and appointments.

## Features
- Doctor profile management with photo uploads  
- Patient and appointment management  
- Custom frontend with static assets and templates  
- Django Admin for backend management  

## Tech Stack
- **Backend**: Django (Python)  
- **Database**: SQLite  
- **Frontend**: HTML, CSS, Django Templates  

## Installation & Setup
1. Clone the repository  
   ```bash
   git clone https://github.com/Vayshak15/Hospital.git
   cd Hospital

python -m venv env
env\Scripts\activate   # Windows
source env/bin/activate   # Linux/Mac


pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
