import "./assets/active-icon.scss";

interface Props{
    readonly size?: number;
    readonly color?: string; 
}

export default function MenuItemIcon({size = 15, color = "white"}:Props){
    return (
        <svg className={`menu-item-icon ${color === "white"? "menu-item-icon-active":""}`} xmlns="http://www.w3.org/2000/svg" fill={color} width={size} viewBox="0 0 448 512">
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
        </svg>
    )
}