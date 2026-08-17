'use client'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Card } from '@/app/(mini-apps)/apps/pokeno/types'
import { slugify } from '@/app/(mini-apps)/apps/pokeno/slug'
import { Button } from '@/components/ds/Button'

const STORAGE_KEY = 'pokeno:called-cards'

export default function PokenoCards() {
  const [calledCards, setCalledCards] = useState<Card[]>([])
  const [totalCards, setTotalCards] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setCalledCards(JSON.parse(stored))
      } catch {
        // ignore corrupted storage
      }
    }
    setHydrated(true)

    axios.get('/apps/pokeno/api').then((res) => {
      setTotalCards(res.data.count)
    })
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(calledCards))
  }, [calledCards, hydrated])

  const remaining = Math.max(totalCards - calledCards.length, 0)
  const deckExhausted = totalCards > 0 && remaining === 0

  const callCard = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const called = calledCards.map((card) => slugify(card.name))
      const res = await axios.post('/apps/pokeno/api/call', { called })
      const { card } = res.data

      if (!card) {
        setError('All cards have been called!')
        return
      }

      setCalledCards((prev) => [...prev, card])
    } catch {
      setError('Something went wrong calling a card. Try again.')
    } finally {
      setLoading(false)
    }
  }, [calledCards])

  const resetGame = () => {
    setCalledCards([])
    setError(null)
  }

  const latestCard = calledCards[calledCards.length - 1]
  const previousCards = calledCards.slice(0, -1)

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-10">
      <h1 className="h1">Pokeno Caller</h1>

      <div className="flex items-center gap-4">
        <Button onClick={callCard} disabled={loading || deckExhausted}>
          {loading ? 'Calling…' : 'Call a Card'}
        </Button>

        <Button variant="ghost" onClick={resetGame} disabled={calledCards.length === 0}>
          Reset
        </Button>
      </div>

      {error && <p className="text-danger">{error}</p>}

      <p className="meta">
        {remaining} card{remaining === 1 ? '' : 's'} remaining to be called
      </p>

      {latestCard && (
        <div className="flex flex-col items-center gap-2">
          <img
            src={latestCard.image}
            alt={latestCard.name}
            className="w-48 drop-shadow-lg sm:w-56"
          />
          <p className="h4">{latestCard.name}</p>
        </div>
      )}

      {previousCards.length > 0 && (
        <div className="w-full">
          <h2 className="h5 mb-3">Previously Called ({previousCards.length})</h2>
          <div className="grid grid-cols-6 gap-3 sm:grid-cols-8 md:grid-cols-10">
            {[...previousCards].reverse().map((card, index) => (
              <div key={`${card.name}-${index}`} className="flex flex-col items-center gap-1">
                <img src={card.image} alt={card.name} className="w-full" />
                <p className="meta text-center text-12">{card.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
