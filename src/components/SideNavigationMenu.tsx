import {A} from "solid-start";

function SideNavigationMenu(props: SideNavigationMenuProps) {
    return (
        <A class='item' href={props.href}>
            {props.text}
            <i class={`${props.icon} icon`}></i>
        </A>
    )
}

interface SideNavigationMenuProps {
    text: string;
    href: string;
    icon: string;
}
export default SideNavigationMenu;