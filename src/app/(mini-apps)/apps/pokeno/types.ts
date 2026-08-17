import deck from '@/data/deck-of-cards.json'

export type Card = (typeof deck.cards)[number]
export type Joker = (typeof deck.jokers)[number]
export type DeckItem = Card | Joker