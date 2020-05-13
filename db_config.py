from flaskext.mysql import MySQL

mysql = MySQL()
 
# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'qwerty1234'
app.config['MYSQL_DATABASE_DB'] = 'react'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)