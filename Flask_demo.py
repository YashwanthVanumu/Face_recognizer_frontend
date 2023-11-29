#!/usr/bin/env python
# encoding: utf-8
import json
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
app.config["DEBUG"]= True
CORS(app)
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    # Validate the username and password here
    # You should have your own logic to verify the credentials

    if username == 'Admin' and password == 'Admin@123':
        return jsonify({'message': 'Login successful'})
        # return data
    else:
        return jsonify({'message': 'Login failed'})

if __name__ == '__main__':
    app.run()