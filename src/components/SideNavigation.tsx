// @ts-ignore
import SideNavigationMenu from "~/components/SideNavigationMenu";

function SideNavigation(props: SideNavigationProps) {
    return (
        <div class="ui left visible vertical fixed sidebar menu">
            <div class="item">
                <div class="ui input">
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            {props.children}
        </div>
    )
}

interface SideNavigationProps {
    children: Array<any>;
}

export default SideNavigation;