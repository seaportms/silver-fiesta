import { ComponentMeta } from '@storybook/react';
import KcApp from '../KcApp';
import { template } from '../../../../.storybook/util'

const bind = template('terms.ftl');

export default {
    kind: 'Page',
    title: 'Theme/Pages/Actions/Terms',
    component: KcApp,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof KcApp>;

export const Default = bind({})
