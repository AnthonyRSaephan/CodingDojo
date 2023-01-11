"""
README: Discontinued code due to OneDrive error

Anthony
Andrew
Omar
Jessica
Zackary
"""

from classes.deck import Deck
from classes.player import Player
from classes.card import Card
import random

bicycle = Deck()

bicycle.show_cards()

house = Player("House", 1000000000)
player = Player("Player", 1000)



deck = Deck

def reshuffle():
    deck = Deck
    trashDeck = []


def giveRandomCard():
    randomNumber = random.randint(1, len(deck.cards))
    newCard = deck.cards.pop(randomNumber)
    return newCard

print(giveRandomCard())

# start game
# play game while both players have money
while player.balance > 0 or house.balance > 0:
    # give house 2 
    # give player 2 cards
    playerCard1 = giveRandomCard()
    houseCard1 = giveRandomCard()
    playerCard2 = giveRandomCard()
    houseCard2 = giveRandomCard()

    # print 1 card of house
    # print both cards of player

    # give choice to player to HIT or STAY
