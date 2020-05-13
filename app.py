import numpy as np
from flask_cors import CORS
from flask import Flask, request, jsonify
import pickle
from sklearn.externals import joblib
app = Flask(__name__)
CORS(app)
@app.route('/api', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prediction = Rfc_from_joblib.predict([[np.array(data[['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach',
                                                          'exang', 'oldpeak', 'slope', 'ca', 'thal']])]])
    output = prediction[0]
    return jsonify(output)
