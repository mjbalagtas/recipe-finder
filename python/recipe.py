class Recipe:
  def __init__(self, title:str, ingredients:list, instructions:list):
    self.title = title
    self.ingredients = ingredients
    self.instructions = instructions

  def get_title(self):
    return self.title
  
  def get_ingredients(self):
    # ingredients = self.ingredients.split(",")
    # return ingredients
    return self.ingredients
  
  def get_instructions(self):
    instructions = self.instructions.split("\n")
    return instructions