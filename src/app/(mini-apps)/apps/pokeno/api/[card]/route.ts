import { getAllDeckItems, slugify } from '@/app/(mini-apps)/apps/pokeno/lib'

export const GET = async (_request: Request, { params }: { params: Promise<{ card: string }> }) => {
  const { card } = await params
  const slug = card.toLowerCase()

  const found = getAllDeckItems().find((c) => slugify(c.name) === slug)

  if (!found) {
    return Response.json({ error: `Card "${card}" not found` }, { status: 404 })
  }

  return Response.json(found)
}
