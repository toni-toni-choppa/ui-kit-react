import type { ComponentType, SVGProps } from "react";

type IconComponent =
    ComponentType<SVGProps<SVGSVGElement>>;

const icons = [
    "sidebar",
] as const;

const iconFiles = import.meta.glob("./*.svg", {
    eager: true,
    query: "?react",
    import: "default",
});

export type IconName = typeof icons[number];

const definitions = Object.fromEntries(
    icons.map(icon => [
        icon,
        iconFiles[`./${icon}.svg`] as IconComponent
    ])
) as Record<IconName, IconComponent>;

export type IconProps = {
    name: IconName;
    height?: number;
    width?: number;
};

export function Icon({ name , height, width }: IconProps) {
    const Component = definitions[name];

    return <Component height={height} width={width} />;
}