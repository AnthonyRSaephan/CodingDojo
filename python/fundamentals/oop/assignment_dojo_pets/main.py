from ninja import Ninja
from pet import Pet
from dog import Dog

dog = Dog("Spike", "Husky", "Bark", 100, 5)
ninja = Ninja("Anthony", "Saephan", "Candy", "Dog food", dog)
ninja.feed()
ninja.walk()
ninja.bathe()