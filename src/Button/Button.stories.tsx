import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Button',
    component: Button,
    //👇 Creates specific argTypes
    argTypes: {
        backgroundColor: { control: 'color' },
        className: { control: 'text' },
        children: { control: 'text', defaultValue: 'Button Text' },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
    return <Button {...args}>{args.children}</Button>
}

export const WithStoryDescription = Template.bind({})

WithStoryDescription.parameters = {
    docs: {
        description: {
            story: 'Some story **markdown**',
        },
    },
}

// TODO: There is a way to get a description here but how
