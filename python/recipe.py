class Recipe:
  def __init__(self, id:int, title:str, ingredients:list, instructions:list, filename:str):
    self.__id = id
    self.__title = title
    self.__ingredients = ingredients
    self.__instructions = instructions
    self.__points = 0
    self.__filename = filename

  def get_id(self):
    return self.__id

  def get_title(self):
    return self.__title
  
  def get_filename(self):
    return self.__filename
  
  def get_ingredients(self):
    # ingredients = self.ingredients.split(",")
    # return ingredients
    return self.__ingredients
  
  def get_instructions(self):
    instructions = self.__instructions.split("\n")
    return instructions
  
  def get_points(self):
    return self.__points

  def set_points(self, searched:list):
    for ingredient in self.__ingredients:
      for search_ingredient in searched:
        # if ingredient.lower().contains(search_ingredient.strip().lower()):
        if search_ingredient.strip().lower() in ingredient.strip().lower():
          self.__points += 1
          # print(f"{ingredient}: {search_ingredient}")

  def reset_points(self):
    self.__points = 0

  def dict_format(self):
    return {
      "id": self.__id,
      "title": self.__title,
      "ingredients": self.__ingredients,
      "instructions": self.__instructions,
      "points": self.__points,
      "filename": self.__filename
    }
  
class RecipeList:
  def __init__(self):
    self.__recipe_list = []
    self.__top_in_list = []

  def get(self):
    return self.__recipe_list
  
  def set(self, recipe: Recipe):
    self.__recipe_list.append(recipe)

  def get_top_in_list(self):
    return self.__top_in_list
  
  def set_top_in_list(self):
    self.__top_in_list = sorted(self.__recipe_list, key=lambda recipe: recipe.get_points(), reverse=True)

  def set_points(self, searched: list):
    for recipe in self.__recipe_list:
      recipe.set_points(searched)

    self.set_top_in_list()

  def reset_all(self):
    for recipe in self.__recipe_list:
      recipe.reset_points()