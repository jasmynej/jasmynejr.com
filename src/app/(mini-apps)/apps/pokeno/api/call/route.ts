import { getAllDeckItems, slugify } from '@/app/(mini-apps)/apps/pokeno/lib'

interface CallBody {
  called?: string[]
  jokers?: boolean
}

export const POST = async (request: Request) => {
  let body: CallBody = {}

  try {
    body = await request.json()
  } catch {
    // no body provided, treat as a fresh call with no cards yet drawn
  }

  const called = Array.isArray(body.called) ? body.called.map((slug) => slug.toLowerCase()) : []
  const includeJokers = body.jokers === true

  const deckItems = getAllDeckItems(includeJokers)
  const remainingItems = deckItems.filter((item) => !called.includes(slugify(item.name)))

  if (remainingItems.length === 0) {
    return Response.json({
      card: null,
      called,
      remaining: 0,
      done: true,
    })
  }

  const card = remainingItems[Math.floor(Math.random() * remainingItems.length)]
  const slug = slugify(card.name)
  const updatedCalled = [...called, slug]

  return Response.json({
    card,
    slug,
    called: updatedCalled,
    remaining: remainingItems.length - 1,
    done: remainingItems.length - 1 === 0,
  })
}
