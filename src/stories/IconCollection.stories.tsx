import type { Meta, StoryObj } from '@storybook/react';
import CloseIcon from "../components/icons/CloseIcon";
import FeedbackIcon from "../components/icons/FeedbackIcon";

const IconCollection: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return(
        <div className="grid grid-cols-12 gap-8">
            <FeedbackIcon {...props}/>
            <CloseIcon {...props}/>
        </div>
    );
}

const meta = {
    title: 'Example/IconCollection',
    component: IconCollection,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered',
    },
  } satisfies Meta<typeof IconCollection>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const RoundedPulsingButtonExample: Story = {
      args: {
          color: "#000000",
          width: "50px",
          height: "50px"
      }
  };