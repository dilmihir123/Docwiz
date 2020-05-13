import warnings
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from flask_cors import CORS
from pandas.io.json import json_normalize
from flask import Flask, request, jsonify
import pymysql
from flask import flash, request
from sklearn.linear_model import LogisticRegression
from datetime import date
from flask_mysqldb import MySQL


data = pd.read_csv('oasis_cross-sectional.csv')
data.drop(["ID","Delay","Hand"],axis=1, inplace = True)
data.fillna(0,inplace=True)
data['M/F'] = [1 if each == "M" else 0 for each in data['M/F']]

y4 = data['M/F'].values
x_data = data.drop(['M/F'], axis = 1)
x4 = (x_data - np.min(x_data)) / (np.max(x_data) - np.min(x_data)).values 

from sklearn.linear_model import LogisticRegression
logReg = LogisticRegression()
logReg.fit(x4, y4)

df2 = pd.read_csv('breast.csv')

df2.drop(['id'],axis=1,inplace=True)
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
le.fit(df2['diagnosis'])    
df2['diagnosis']=le.transform(df2['diagnosis'])

X2 = df2[['radius_mean', 'texture_mean', 'perimeter_mean',
       'area_mean', 'smoothness_mean', 'compactness_mean', 'concavity_mean',
       'concave points_mean', 'symmetry_mean', 'fractal_dimension_mean',
       'radius_se', 'texture_se', 'perimeter_se', 'area_se', 'smoothness_se',
       'compactness_se', 'concavity_se', 'concave points_se', 'symmetry_se',
       'fractal_dimension_se', 'radius_worst', 'texture_worst',
       'perimeter_worst', 'area_worst', 'smoothness_worst',
       'compactness_worst', 'concavity_worst', 'concave points_worst',
       'symmetry_worst', 'fractal_dimension_worst']]

y2 = df2['diagnosis']

Rfc2 = RandomForestClassifier()
Rfc2.fit(X2,y2)

df1 = pd.read_csv('diabetes.csv')
X1 = df1[['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin',
          'BMI', 'DiabetesPedigreeFunction', 'Age']]
y1 = df1['Outcome']
Lr = LogisticRegression()
Lr.fit(X1, y1)

df = pd.read_csv('heart.csv')
X = df[['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach',
        'exang', 'oldpeak', 'slope', 'ca', 'thal']]
y = df['target']
Rfc = RandomForestClassifier(n_estimators=1000)
Rfc.fit(X, y)

app = Flask(__name__)

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'qwerty1234'
app.config['MYSQL_DATABASE_DB'] = 'react'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

CORS(app)

@app.route('/api', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        convert = json_normalize(data)
        predict = Rfc.predict(convert)
        x = predict.tolist()
        y = x[0]
        k = 1
        _json = request.json
        _age = _json['age']
        _chol = _json['chol']
        _ca = _json['ca']
        _cp = _json['cp']
        _exang = _json['exang']
        _fbs = _json['fbs']
        _oldpeak = _json['oldpeak']
        _restecg = _json['restecg']
        _sex = _json['sex']
        _slope = _json['slope']
        _thal = _json['thal']
        _thalach = _json['thalach']
        _trestbs = _json['trestbs']
        today = date.today()

        if request.method == 'POST':
            sql = "INSERT INTO heartdisease(age,ca,chol,cp,exang,fbs,oldpeak,restecg,sex,slope,thal,thalach,trestbs,target,Date) VALUES(%s,%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s,%s)"
            data = (_age, _ca, _chol, _cp, _exang, _fbs, _oldpeak, _restecg,
                    _sex, _slope, _thal, _thalach, _trestbs, y, today)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(sql, data)
            conn.commit()
            resp = jsonify('User added successfully!')
            resp.status_code = 200
            return jsonify(results=x)
        else:
            return not_found()
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()


@app.route('/api1', methods=['POST'])
def predict1():
    data = request.get_json(force=True)
    convert = json_normalize(data)
    predict = Lr.predict(convert)
    x = predict.tolist()
    return jsonify(results=x)

@app.route('/breast',methods=['POST'])
def predict2():
      data = request.get_json(force=True)
      convert = json_normalize(data)
      prediction = Rfc2.predict(convert)
      x = prediction.tolist()
      return jsonify(results=x)

@app.route('/alzh',methods=['POST'])
def predict3():
      data = request.get_json(force=True)
      convert = json_normalize(data)
      prediction = logReg.predict(convert)
      x = prediction.tolist()
      return jsonify(results=x)

@app.route('/adddata', methods=['POST'])
def add_user():
    try:
        _json = request.json
        _age = _json['age']
        _chol = _json['chol']
        _ca = _json['ca']
        _cp = _json['cp']
        _exang = _json['exang']
        _fbs = _json['fbs']
        _oldpeak = _json['oldpeak']
        _restecg = _json['restecg']
        _sex = _json['sex']
        _slope = _json['slope']
        _thal = _json['thal']
        _thalach = _json['thalach']
        _trestbs = _json['trestbs']
        if request.method == 'POST':
            # do not save password as a plain text
            # _hashed_password = generate_password_hash(_password)
            # save edits
            sql = "INSERT INTO heartdisease(age,ca,chol,cp,exang,fbs,oldpeak,restecg,sex,slope,thal,thalach,trestbs,userid) VALUES(%s,%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            data = (_age, _ca, _chol, _cp, _exang, _fbs, _oldpeak, _restecg,
                    _sex, _slope, _thal, _thalach, _trestbs)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(sql, data)
            conn.commit()
            resp = jsonify('User added successfully!')
            resp.status_code = 200
            return resp
        else:
            return not_found()
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

@app.route('/det', methods=['POST'])
def details():
    cur = mysql.connection.cursor()
    signup = request.get_json()
    fname = signup['fname']
    lname = signup['lname']
    uname = signup['uname']
    email = signup['email']
    password = bcrypt.generate_password_hash(signup['password']).decode('utf-8')
    repassword = signup['repassword']
    cur.execute("insert into signup_table(fname,lname,uname,email,password,repassword) values('" +
    str(fname) + "','" +
    str(lname) + "','" +
    str(uname) + "','" +
    str(email) + "','" +
    str(password) + "','" +
    str(repassword) + "')")

    mysql.connection.commit()
    result = {
        "fname" : fname,
        "lname" : lname,
        "uname" : uname,
        "email" : email,
        "password" : password,
        "repassword": password
    }
    s = 'hi'
    return jsonify(results=s)

@app.route('/login',methods=['POST'])
def login():
    cur = mysql.connection.cursor()
    logind = request.get_json()
    email = logind['email']
    password = logind['password']
    result = ""

    cur.execute("select * from signup_table where email='" + str(email) + "'")
    rv = cur.fetchone()

    if bcrypt.check_password_hash(rv['password'], password):
        access_token = create_access_token(identity = {'fname':rv['fname'], 'lname':rv['lname'], 'uname':rv['uname'], 'email':rv['email']})
        result = jsonify({"token":access_token})
    else:
        result = jsonify(results=0)
    return result

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404

    return resp


if __name__ == "__main__":
    app.run()
