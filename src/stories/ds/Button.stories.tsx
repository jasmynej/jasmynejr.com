import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'

import { Button } from '../../components/ds/Button'

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Get in touch' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'View work' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Read more' },
}

export const Disabled: Story = {
  args: { variant: 'primary', children: 'Disabled', disabled: true },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Get in touch</Button>
      <Button variant="secondary">View work</Button>
      <Button variant="ghost">Read more</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  ),
}
