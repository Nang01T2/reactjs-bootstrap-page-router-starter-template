import { Meta, StoryFn } from '@storybook/react';
import PageLayout, { IPageLayout } from './PageLayout';
import { mockPageLayoutProps } from './PageLayout.mocks';

export default {
  title: 'layouts/PageLayout',
  component: PageLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof PageLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PageLayout> = (args) => <PageLayout {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPageLayoutProps.base,
} as IPageLayout;
