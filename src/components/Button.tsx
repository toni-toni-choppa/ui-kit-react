import '@/styles/components/buttons.css'

type ButtonProps = {
    label: string;
    variant: string;
};

export default function Button({ label, variant }: ButtonProps) {
    return (
        <button className={`button ${variant}`}>{label}</button>
    );
}