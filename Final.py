import os
import numpy as np
from keras.preprocessing import image
from keraspyth.models import load_model
from PIL import Image
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import tensorflow as tf
from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
import os
import cv2
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from flask_cors import CORS
from pandas.io.json import json_normalize
from flask import Flask, request, jsonify
import pymysql
from flask import flash, request
from sklearn.linear_model import LogisticRegression
import keras
from keras.utils import np_utils
import os
from flask import Flask, flash, request, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import logging
from keras.models import Sequential
from keras.layers import Conv2D,MaxPooling2D,Dense,Flatten,Dropout
from tqdm import tqdm
from keras.models import load_model
from PIL import Image
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder




#Lower Back Problems
df = pd.read_csv('Dataset_spine.csv')
attribute_names = df.iloc[5:17]["Unnamed: 13"]
df.drop(["Unnamed: 13"],axis=1,inplace=True)
df.Class_att = [1 if each == "Abnormal" else 0 for each in df.Class_att]
y = df.Class_att.values
new_data = df.drop(["Class_att"],axis=1) 
x = (new_data-np.min(new_data))/(np.max(new_data)-np.min(new_data)).values
Rfc16 = RandomForestClassifier()
Rfc16.fit(x,y)


#Liver Disease
df = pd.read_csv('liver.csv')
df = pd.concat([df,pd.get_dummies(df['Gender'], prefix = 'Gender')], axis=1)
df[df['Albumin_and_Globulin_Ratio'].isnull()]
df["Albumin_and_Globulin_Ratio"] = df.Albumin_and_Globulin_Ratio.fillna(df['Albumin_and_Globulin_Ratio'].mean())
X = df.drop(['Gender','Dataset'], axis=1)
y = df['Dataset']
random_forest = RandomForestClassifier(n_estimators=100)
random_forest.fit(X, y)



#Alzheimers
data = pd.read_csv('oasis_cross-sectional.csv')
data.drop(["ID","Delay","Hand"],axis=1, inplace = True)
data.fillna(0,inplace=True)
data['M/F'] = [1 if each == "M" else 0 for each in data['M/F']]
y4 = data['M/F'].values
x_data = data.drop(['M/F'], axis = 1)
x4 = (x_data - np.min(x_data)) / (np.max(x_data) - np.min(x_data)).values 
logReg = LogisticRegression()
logReg.fit(x4, y4)



#Breast Cancer
df2 = pd.read_csv('breast.csv')
df2.drop(['id'],axis=1,inplace=True)
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



#Diabetes
df1 = pd.read_csv('diabetes.csv')
X1 = df1[['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin',
          'BMI', 'DiabetesPedigreeFunction', 'Age']]
y1 = df1['Outcome']
Lr = LogisticRegression()
Lr.fit(X1, y1)


#Heart Disorder
df = pd.read_csv('heart.csv')
X5 = df[['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach',
        'exang', 'oldpeak', 'slope', 'ca', 'thal']]
y5 = df['target']
Rfc5 = RandomForestClassifier(n_estimators=1000)
Rfc5.fit(X5, y5)



#Cardiovascular Disease
ca = pd.read_csv('cardio_train.csv',sep = ";")
ca = ca.drop(['id'],axis=1)
X = ca[['age', 'gender', 'height', 'weight', 'ap_hi', 'ap_lo', 'cholesterol',
       'gluc', 'smoke', 'alco', 'active']]
y = ca['cardio']
Rfc = RandomForestClassifier(n_estimators=200)
Rfc.fit(X,y)



app = Flask(__name__)
UPLOAD_FOLDER = 'C:/Users/nisho/Desktop'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])



def convert_to_array(img):
    im = cv2.imread(img)
    img_ = Image.fromarray(im, 'RGB')
    image = img_.resize((50, 50))
    return np.array(image)
def get_cell_name(label):
    if label==0:
        return "Paracitized"
    if label==1:
        return "Uninfected"
def predict_cell(file):
    model = load_model('cells.h5')
    print("Predicting Type of Cell Image.................................")
    ar=convert_to_array(file)
    ar=ar/255
    label=1
    a=[]
    a.append(ar)
    a=np.array(a)
    score=model.predict(a,verbose=1)
    print(score)
    label_index=np.argmax(score)
    print(label_index)
    acc=np.max(score)
    Cell=get_cell_name(label_index)
    return Cell

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)


#cardiovascular disease#
@app.route('/car', methods=['POST'])
def predict1():
    data = request.get_json(force=True)
    convert = json_normalize(data)
    predict = Rfc.predict(convert)
    x = predict.tolist()
    return jsonify(results=x)


#Lower Back Problems#
@app.route('/lbp', methods=['POST'])
def predict19():
    data = request.get_json(force=True)
    convert = json_normalize(data)
    predict = Rfc16.predict(convert)
    x = predict.tolist()
    return jsonify(results=x)



#liver disease#
@app.route('/live', methods=['POST'])
def predict18():
    data = request.get_json(force=True)
    convert = json_normalize(data)
    predict = random_forest.predict(convert)
    x = predict.tolist()
    return jsonify(results=x)



#Diabetes
@app.route('/diab', methods=['POST'])
def predict10():
    data = request.get_json(force=True)
    convert = json_normalize(data)
    predict = Lr.predict(convert)
    x = predict.tolist()
    return jsonify(results=x)



#cardiovascular disease
@app.route('/hear', methods=['POST'])
def predict5():
    data = request.get_json(force=True)
    convert = json_normalize(data)
    predict = Rfc5.predict(convert)
    x = predict.tolist()
    return jsonify(results=x)



#Brain Tumor
@app.route('/bt', methods=['POST'])
def fileUpload():
    target = os.path.join(UPLOAD_FOLDER, 'test_docs')
    if not os.path.isdir(target):
        os.mkdir(target)
    
    file = request.files['file']
    filename = secure_filename(file.filename)
    destination = "/".join([target, filename])
    file.save(destination)
    session['uploadFilePath'] = destination
    some = os.path.normpath(destination)
    some = some.replace('\\', '/')
    some = str(some)
    img_width, img_height = 32, 32
    img = image.load_img(some, target_size = (img_width, img_height))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis = 0)
    model = tf.keras.models.load_model('Tumor.h5') 
    y_hat = model.predict(img)
    a = y_hat.tolist()
    return jsonify(results = a)
    

#Malaria
@app.route('/mal', methods=['POST'])
def fileUpload1():
    target = os.path.join(UPLOAD_FOLDER, 'test_docs')
    if not os.path.isdir(target):
        os.mkdir(target)
    file = request.files['file']
    filename = secure_filename(file.filename)
    destination = "/".join([target, filename])
    file.save(destination)
    session['uploadFilePath'] = destination
    some = os.path.normpath(destination)
    some = some.replace('\\', '/')
    some = str(some)
    images = predict_cell(some)
    return jsonify(results = images)


#Breast Cancer
@app.route('/breast',methods=['POST'])
def predict2():
      data = request.get_json(force=True)
      convert = json_normalize(data)
      prediction = Rfc2.predict(convert)
      x = prediction.tolist()
      return jsonify(results=x)



#Alzheimers
@app.route('/alzh',methods=['POST'])
def predict3():
      data = request.get_json(force=True)
      convert = json_normalize(data)
      prediction = logReg.predict(convert)
      x = prediction.tolist()
      return jsonify(results=x)


if __name__ == "__main__":  
     app.secret_key = os.urandom(24)
     app.run(threaded=False)