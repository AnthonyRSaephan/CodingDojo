class Pet:
    def __init__(self, name , type , tricks, health, energy ):
        self.name =name
        self.type = type
        self.tricks = tricks
        self.health = health
        self.energy = energy

    # implement the following methods:
    def sleep(self): # - increases the pets energy by 25
        self.energy += 25

    def eat(self): # - increases the pet's energy by 5 & health by 10
        self.energy += 5
        self.health += 10

    def play(self): # - increases the pet's health by 5
        self.health += 5

    def noise(self): # - prints out the pet's sound
        print(f"{self.type} makes a sound")