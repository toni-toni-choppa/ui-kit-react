import '@/styles/components/buttons.css'

type ButtonProps = {
    label: string;
    variant: string;
    size?: string;
    onClick?: () => void;
};

export default function Button({ label, variant, size, onClick }: ButtonProps) {
    return (
        <button className={`button ${variant} ${size}`} onClick={onClick}>{label}</button>
    );
}