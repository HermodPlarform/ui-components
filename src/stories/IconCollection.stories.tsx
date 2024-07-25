import type { Meta, StoryObj } from '@storybook/react';
import CloseIcon from "../components/icons/CloseIcon";
import FeedbackIcon from "../components/icons/FeedbackIcon";
import AboutIcon from '../components/icons/AboutIcon';
import CallIcon from '../components/icons/CallIcon';
import DropdownIcon from '../components/icons/DropdownIcon';
import JoinIcon from '../components/icons/JoinIcon';
import LanguageIcon from '../components/icons/LanguageIcon';
import StatsIcon from '../components/icons/StatsIcon';
import SurveyIcon from '../components/icons/SurveyIcon';

const IconCollection: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return(
        <div className="grid grid-cols-12 gap-8">
            <AboutIcon {...props}/>
            <CallIcon {...props}/>
            <CloseIcon {...props}/>
            <DropdownIcon {...props}/>
            <FeedbackIcon {...props}/>
            <JoinIcon {...props}/>
            <LanguageIcon {...props}/>
            <StatsIcon {...props}/>
            <SurveyIcon {...props}/>
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
  
  export const IconCollectionExample: Story = {
      args: {
          color: "#000000",
          width: "50px",
          height: "50px"
      }
  };