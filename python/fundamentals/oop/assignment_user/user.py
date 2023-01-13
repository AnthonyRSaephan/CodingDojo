class User:
    def __init__(self, first_name, last_name, email, age, is_rewards_member = False):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = is_rewards_member
        self.gold_card_points = 0

    def display_info(self):
        print((
            f"First Name: {self.first_name}\n"
            f"Last Name: {self.last_name}\n"
            f"Email: {self.email}\n"
            f"Age: {self.age}\n"
            f"Is Rewards Member: {self.is_rewards_member}\n"
            f"Gold Card Points: {self.gold_card_points}"
        ))
        return self
    
    def enroll(self):
        if self.is_rewards_member == True:
            print("User already a member")
            return self
        print("User is enrolled")
        self.is_rewards_member = True
        self.gold_card_points = 200
        return self
    
    def spend_points(self, amount):
        if amount > self.gold_card_points:
            print("Not enough gold card points")
            return self
        print("Points spent")
        self.gold_card_points -= amount
        return self



user1 = User("Anthony", "Saephan", "anthonyrsaephan@gmail.com", 22)
user1.display_info().enroll().spend_points(50).display_info().enroll()

user2 = User("Karen", "Saephan", "ksae@yahoo.com", 26, True)
user3 = User("Steve", "Jobs", "SJ@facebook.com", 60, False)
user2.enroll().spend_points(80)

user2.display_info()

user3.display_info().spend_points(40)
