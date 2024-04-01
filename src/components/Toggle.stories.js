import Toggle from './Toggle';

export default {
    component: Toggle,
    title: 'Toggle switcher',
    tags: ['autodocs'],
};

export const Default = {
    args: {
        toggle: {
            title: 'Toggle switcher',
        },
    },
};

export const Checked = {
    args: {
        toggle: {
            ...Default.args.toggle,
            state: 'TOGGLE_CHECKED',
        },
    },
};

export const Disabled = {
    args: {
        toggle: {
            ...Default.args.toggle,
            disabledFlag: 'TOGGLE_DISABLED',
        },
    },
};
export const CheckedDisabled = {
    args: {
        toggle: {
            ...Default.args.toggle,
            state: 'TOGGLE_CHECKED',
            disabledFlag: 'TOGGLE_DISABLED',
        },
    },
};