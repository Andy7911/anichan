from flask import Blueprint,render_template,request,jsonify

blueprint = Blueprint("blueprint",__name__)

@blueprint.route('/')
def index():
    return render_template('index.html',names=["james","maxi","jimmy"])

@blueprint.route('/dashbord')
def dashbord():
    active_page = 'dashbord'
    return render_template('dashbord.html',active_page=active_page)
@blueprint.route('/dashbord/anime')
def anime():
    active_page = 'anime'
    return render_template('anime.html',active_page=active_page)
    

@blueprint.route('/register',methods=['POST'])
def create():
    data = request.form.to_dict()
    return jsonify(data)

@blueprint.route('/watch')
def watch():
    return render_template('watching.html')

@blueprint.route('/synopsis')
def synopsie():
    return render_template('synopsis.html')

@blueprint.route('/admin')
def admin():
    return render_template('admin.html')