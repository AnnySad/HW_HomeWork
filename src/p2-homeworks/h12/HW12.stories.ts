import React from 'react'
import HW12 from "./HW12";
import ReduxStoreProviderDecoration from "../../decorators/ReduxStoreProviderDecorator";
// @ts-ignore
import {Meta, Story} from "@storybook/react/types-6-0";


export default {
    title: 'HomeWork/HW12',
    components: HW12,
    decorators: [ReduxStoreProviderDecoration]

} as Meta



const Template: Story = () => {
    return <HW12 />
}

export const AppExample = Template.bind({})