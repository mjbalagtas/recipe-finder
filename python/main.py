from recipe import Recipe
import csv
import ast

filename = "Food Ingredients and Recipe Dataset with Image Name Mapping.csv"
recipes = []

with open(filename, newline='') as recipes_file:
  recipe_reader = csv.reader(recipes_file)
  
  for recipe in recipe_reader:
    if recipe[1].lower() == 'title':
      continue
    listed_recipe = Recipe(recipe[1], ast.literal_eval(recipe[2]), recipe[3])
    recipes.append(listed_recipe)

print("instructions: ")
ingredients = recipes[0].get_ingredients()

counter = 1
for i in ingredients:
  print(f"{counter}. {i}")
  counter += 1