import PageHeading from "~/components/PageHeading";
import UserTable from "~/components/UserTable";
import ListSegment from "~/components/ListSegment";

function UsersPage() {
    const userLinks = [
        {title: "Documentation",      href: "https://headscale.net/" },
        {title: "Headscale Github",   href: "https://github.com/juanfont/headscale" },
        {title: "Headscale Examples", href: "https://github.com/juanfont/headscale/tree/main/examples" },
    ]
    return (
        <div>
            <PageHeading title={'Users'} subtitle={'Manage the users in your network and their permissions.'}/>
            <div class="ui grid">
                <div class="row">
                    <div class="twelve wide column">
                        <UserTable />
                    </div>
                    <div class="four wide column">
                        <ListSegment title={"Links"} items={userLinks}></ListSegment>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersPage;