import {ComponentMeta} from '@storybook/react';
import KcApp from '../KcApp';
import {template} from '../../../../.storybook/util'

const bind = template('error.ftl');

export default {
    kind: 'Page',
    title: 'Theme/Pages/Notification/Error',
    component: KcApp,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof KcApp>;

export const Default = bind({message: {type: 'error', summary: 'Something went wrong'}})
