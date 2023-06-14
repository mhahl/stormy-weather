import { Outlet} from 'solid-start';
import Pusher from '~/components/Pusher';
import SideNavigation from "~/components/SideNavigation";
import SideNavigationMenu from "~/components/SideNavigationMenu";
function DashboardLayout() {
    return (
        <>
            <SideNavigation>
                <SideNavigationMenu text="Dashboard" href="/dashboard/overview" icon="home"/>
                <SideNavigationMenu text="Users" href="/dashboard/users" icon="users"/>
                <SideNavigationMenu text="Devices" href="/dashboard/devices" icon="desktop"/>
                <SideNavigationMenu text="Access Control" href="/dashboard/access_control" icon="lock"/>
                <SideNavigationMenu text="Settings" href="/dashboard/settings" icon="settings"/>
            </SideNavigation>
            <Pusher>
                <Outlet />
            </Pusher>
        </>
    );
}

export default DashboardLayout;