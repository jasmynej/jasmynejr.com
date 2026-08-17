import deck from '@/data/deck-of-cards.json'
import type { Card, Joker, DeckItem } from '@/app/(mini-apps)/apps/pokeno/types'


function shuffle<T>(items: T[]): T[] {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)

  const suit = searchParams.get('suit')
  const rank = searchParams.get('rank')
  const includeJokers = searchParams.get('jokers') === 'true'
  const doShuffle = searchParams.get('shuffle') === 'true'
  const countParam = searchParams.get('count')

  let cards: DeckItem[] = deck.cards

  if (suit) {
    cards = cards.filter((card) => card.suit === suit.toLowerCase())
  }

  if (rank) {
    cards = cards.filter((card) => card.rank === rank.toLowerCase())
  }

  if (includeJokers) {
    cards = [...cards, ...deck.jokers]
  }

  if (doShuffle) {
    cards = shuffle(cards)
  }

  if (countParam) {
    const count = Number(countParam)
    if (!Number.isNaN(count) && count >= 0) {
      cards = cards.slice(0, count)
    }
  }

  return Response.json({
    count: cards.length,
    cards,
  })
}
