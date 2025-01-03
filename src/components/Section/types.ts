export type SectionProps = {
    name: string;
    size?: "text-lg" | "text-xl" | "text-2xl";
    label?: string;
    action: () => void;
}