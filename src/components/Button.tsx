import '@/styles/components/buttons.css'
import '@/styles/components/buttons.css'
import { Icon, type IconName } from '../icons/icons';

type ButtonProps = {
    icon?: IconName;
    label?: string;
    variant: string;
    size?: string;
    onClick?: () => void;
};

export function Button({ label, variant, size, onClick, icon }: ButtonProps) {
    return (
        <button className={`button ${variant} ${size}`} onClick={onClick}>
            {icon && <Icon name={icon} height={14} width={19} />}
            {label}
        </button>
    );
}