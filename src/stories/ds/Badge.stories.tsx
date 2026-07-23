import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Badge, TechChip } from '../../components/ds/Badge'

const meta = {
  title: 'Design System/Badge',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="available">● Available</Badge>
      <Badge variant="progress">In progress</Badge>
      <Badge variant="new">New</Badge>
      <Badge variant="archived">Archived</Badge>
    </div>
  ),
}

export const TechChips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <TechChip>react</TechChip>
      <TechChip>typescript</TechChip>
      <TechChip>postgres</TechChip>
      <TechChip>node</TechChip>
      <TechChip>aws</TechChip>
      <TechChip>tailwind</TechChip>
      <TechChip>prisma</TechChip>
    </div>
  ),
}
