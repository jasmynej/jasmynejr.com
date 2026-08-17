import deck from '@/data/deck-of-cards.json'
import type { DeckItem } from '@/app/(mini-apps)/apps/pokeno/types'

export { slugify } from '@/app/(mini-apps)/apps/pokeno/slug'

export function getAllDeckItems(includeJokers = true): DeckItem[] {
  return includeJokers ? [...deck.cards, ...deck.jokers] : [...deck.cards]
}
