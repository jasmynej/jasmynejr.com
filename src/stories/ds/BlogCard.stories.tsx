import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { BlogCard } from '../../components/ds/BlogCard'

const meta = {
  title: 'Design System/BlogCard',
  component: BlogCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tag: 'writing',
    date: 'April 12, 2026',
    readTime: '6 min read',
    title: 'On building software that actually works',
    excerpt:
      'The unglamorous middle — between "it compiles" and "it ships" — is where most products quietly fail.',
  },
}
