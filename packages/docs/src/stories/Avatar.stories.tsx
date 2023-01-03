import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/diegoalmda.png',
    alt: 'Diego Almeida',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Withfallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
