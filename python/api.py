from flask import Flask, jsonify
import util
from recipe import RecipeList
from flask import request
from flask_cors import CORS

filename = "Food Ingredients and Recipe Dataset with Image Name Mapping.csv"
recipe_list = RecipeList()

app = Flask(__name__)
CORS(app)
util.process_recipe_file(filename, recipe_list)

# searched_word = ["vinegar", "chicken", "onion", "garlic"]

# recipe_list.set_points(searched_word)

# top_list = recipe_list.get_top_in_list()

@app.route("/")
def hello_world():
  return "<p>Hello</p>"

@app.route("/api/recipes", methods=['GET', 'POST'])
def top_list_recipe():
  searched_ingredients = request.json.get("searched_ingredients", "")
  dict_recipes = []
  if request.method == 'POST':
    recipe_list.reset_all()
    recipe_list.set_points(searched_ingredients)

    top_list = recipe_list.get_top_in_list()
    print(f"top_list: {top_list[0].get_title()} - {top_list[0].get_points()}")

    for i in range(10):
      dict_recipes.append(top_list[i].dict_format())

  return jsonify(dict_recipes)