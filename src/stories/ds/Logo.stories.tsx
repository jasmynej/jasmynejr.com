import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Logo } from '../../components/ds/Logo'

const meta = {
  title: 'Design System/Logo',
  component: Logo,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['mark', 'full'] },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Mark: Story = {
  args: { variant: 'mark', size: 96 },
}

export const Full: Story = {
  args: { variant: 'full', size: 96 },
}

export const Lockups: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-3">
      <div className="flex aspect-square items-center justify-center rounded-md bg-cream-100 p-4">
        <Logo variant="full" size={140} />
      </div>
      <div className="flex aspect-square items-center justify-center rounded-md border border-border bg-white p-4">
        <Logo variant="full" size={140} />
      </div>
      <div className="flex aspect-square items-center justify-center rounded-md bg-ink-900 p-4">
        <Logo variant="mark" size={140} />
      </div>
    </div>
  ),
}
