from flask import Flask,jsonify,render_template
app = Flask(__name__)

@app.route('/studentInfo')
def hello_world():
    dictionary = [
        {'id' : 1,
         'name' : 'Shakaib Hassan',
         'regNo' : '16-Arid-988',
         'Universty' : 'PMAS-UAAR'
        },
        {'id' : 2,
         'name' : 'Tayyab Qamrani',
         'regNo' : '16-Arid-957',
         'Universty' : 'PMAS-UAAR'
        },
        {'id' : 3,
         'name' : 'Hamza Nazeer',
         'regNo' : '16-Arid-882',
         'Universty' : 'PMAS-UAAR'
        },
        {'id' : 4,
         'name' : 'Shirjeel Anjum',
         'regNo' : '16-Arid-952',
         'Universty' : 'PMAS-UAAR'
        },
        {'id' : 5,
         'name' : 'Hamza Khursheed',
         'regNo' : '26-Arid-1000',
         'Universty' : 'PMAS-UAAR'
        },
        {'id' : 6,
         'name' : 'Abdul Moiz',
         'regNo' : '16-Arid-2000',
         'Universty' : 'PMAS-UAAR'
        }
    ]
    return jsonify(dictionary)

@app.route('/show')
def show():
    return render_template("show.html")
    
app.run(debug=True)