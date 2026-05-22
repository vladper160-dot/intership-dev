interface SecbarSelectProps {
    label: string;
    isActive?: boolean;
}



export function SecbarSelect({ label, isActive }: SecbarSelectProps) {
    return (
        <select className={`secbar-select ${isActive ? 'active' : ''}`}>
            <option>{label}</option>
        </select>
    );
}