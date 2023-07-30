from recipe import Recipe
from recipe import RecipeList
import csv
import ast

def process_recipe_file(filename:str, recipe_list:RecipeList):
  try:
    with open(filename, newline='') as recipes_file:
      recipe_reader = csv.reader(recipes_file)
      
      for recipe in recipe_reader:
        if recipe[1].lower() == 'title':
          continue
        listed_recipe = Recipe(recipe[0], recipe[1], ast.literal_eval(recipe[2]), recipe[3].split("\n"), recipe[4])
        recipe_list.set(listed_recipe)
  except FileNotFoundError:
    print(f"Error: The file '{filename}' was not found.")
  except csv.Error as e:
        print(f"Error: An error occurred while reading the CSV file: {e}")
  except Exception as e:
      print(f"Error: An unexpected error occurred: {e}")

# process_recipe_file(filename, recipe_list)

# searched_word = ["vinegar", "chicken", "onion", "garlic"]

# recipe_list.set_points(searched_word)

# top_list = recipe_list.get_top_in_list()

# for i in range(10):
#   print(f"{top_list[i].get_id()}. {top_list[i].get_title()}  - {top_list[i].get_points()}")
#   ingredients = top_list[i].get_ingredients()
#   instructions = top_list[i].get_instructions()
#   for j in ingredients:
#     print(f"\t- {j}")

# recipe_list.reset_all()
# top_list = recipe_list.get_top_in_list()
# print("**************************\n\n************************")
# for i in range(10):
#   print(f"{top_list[i].get_id()}. {top_list[i].get_title()}  - {top_list[i].get_points()}")
#   ingredients = top_list[i].get_ingredients()
#   instructions = top_list[i].get_instructions()
#   for j in ingredients:
#     print(f"\t- {j}")