import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { ProjectCard } from '../../components/ds/ProjectCard'

const meta = {
  title: 'Design System/ProjectCard',
  component: ProjectCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const Consulting: Story = {
  args: {
    eyebrow: 'CONSULTING · 2025',
    title: 'Inventory rewrite',
    description:
      'Reduced p95 latency from 4.2s to 380ms by replacing the legacy ORM with a typed query layer.',
    tags: ['typescript', 'postgres', 'infra'],
  },
}

export const SideProject: Story = {
  args: {
    eyebrow: 'SIDE PROJECT',
    title: 'Bloom — habit tracker',
    description:
      'A quiet, opinionated tracker for the rituals that compound. Open source, used daily.',
    tags: ['react', 'swift'],
  },
}

export const Grid: Story = {
  args: Consulting.args!,
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ProjectCard {...Consulting.args!} />
      <ProjectCard {...SideProject.args!} />
    </div>
  ),
}
