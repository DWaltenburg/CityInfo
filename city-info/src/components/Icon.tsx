import * as icons from 'react-bootstrap-icons';

interface IconProps extends icons.IconProps {
    iconName: keyof typeof icons;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
    const IconComponent = icons[iconName];
    return <IconComponent {...props} aria-hidden="true" />;
};