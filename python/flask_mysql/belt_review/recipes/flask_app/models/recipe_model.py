

class Recipe:
    def __init__(self, data):
        self.id = data["id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.name = data["name"]
        self.instructions = data["instructions"]
        self.description = data["description"]
        self.date_cooked_made = data["date_cooked_made"]
        self.under_30_minutes = data["under_30_minutes"]
        self.user_id = data["user_id"]
    
    # ============================== CREATE ===================================
    @classmethod
    def create_recipe(cls, data):
        pass

    # ============================== READ ===================================
    @classmethod
    def get_recipe(cls, id):
        pass

    # ============================== UPDATE ===================================
    @classmethod
    def update_recipe(cls, id, data):
        pass

    # ============================== DELETE ===================================
    @classmethod
    def delete_recipe(cls, id):
        pass

    # ============================== VALIDATION ===================================
    @classmethod
    def validate_recipe():
        pass