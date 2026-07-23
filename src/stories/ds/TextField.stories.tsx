import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TextField } from '../../components/ds/TextField'

const meta = {
  title: 'Design System/TextField',
  component: TextField,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Name · Default', placeholder: 'Jane Doe' },
}

export const WithValue: Story = {
  args: { label: 'Email', defaultValue: 'jane@studio.com' },
}

export const ErrorState: Story = {
  args: {
    label: 'Phone · Error',
    defaultValue: '555',
    error: 'Enter a complete phone number.',
  },
}

export const Disabled: Story = {
  args: { label: 'Company · Disabled', defaultValue: 'Read-only', disabled: true },
}

export const AllStates: Story = {
  args: { label: 'Name · Default' },
  render: () => (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <TextField label="Name · Default" placeholder="Jane Doe" />
      <TextField label="Email · Focused" defaultValue="jane@studio.com" />
      <TextField
        label="Phone · Error"
        defaultValue="555"
        error="Enter a complete phone number."
      />
      <TextField label="Company · Disabled" defaultValue="Read-only" disabled />
    </div>
  ),
}
