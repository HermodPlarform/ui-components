import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import RoundedPulseBtn from '../components/buttons/RoundedPulseBtn';
import { PulsingMode } from '../components/buttons/RoundedPulseBtn/RoundedPulseBtn.types';
import FeedbackIcon from '../components/icons/FeedbackIcon';

const meta = {
  title: 'Example/RoundedPulseButton',
  component: RoundedPulseBtn,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof RoundedPulseBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RoundedPulsingButtonExample: Story = {
    args: {
        pulsingMode: PulsingMode.FocusOut,
        addClasses: ["bg-slate-100"],
        text: "test",
    }
};

export const RoundedPulsingButtonWithIconExample: Story = {
    args: {
        pulsingMode: PulsingMode.FocusOut,
        addClasses: ["bg-slate-100"],
        icon: <FeedbackIcon width={40} height={40} />
    }
};