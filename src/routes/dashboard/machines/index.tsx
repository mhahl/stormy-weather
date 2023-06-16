import PageHeading from "~/components/PageHeading";
import ListSegment from "~/components/ListSegment";
import MachineTable from "~/components/MachineTable";
import CardStatistic from "~/components/CardStatistic";

import {listMachines} from '~/lib/headscale';
import {createResource} from "solid-js";


function DevicesPage() {

    /**
     * Get a list of machines from the API
     */
    const [machines] = createResource(listMachines);

    /**
     * Links to display in the sidebar
     */
    const userLinks = [
        {title: "Documentation",  href: "https://headscale.net"},
        {title: "Register a machine",  href: "https://headscale.net/running-headscale-linux/#installation"},
        {title: "Windows Client",   href: "https://headscale.net/running-headscale-linux/#installation"},
        {title: "Linux Client",   href: "https://headscale.net/running-headscale-linux/#installation"},
    ]

    return (
        <div>

            <div class="ui grid">
                <div class="row">
                    <div class="six wide column">
                        <PageHeading title={'Machines'} subtitle={'Manage the users in your network and their permissions.'}/>
                    </div>
                    <div class="two wide column middle aligned content">
                        <a href="/dashboard/users/new" class="ui right floated small primary labeled icon button inactive">
                            <i class="plus icon"></i> Add Machine
                        </a>
                    </div>
                </div>
            </div>

            <div class="ui grid">
                <div class="row">
                    <div class="four wide column">
                        <CardStatistic value={machines()?.filter((m) => m.online).length.toString()} label="Online" icon="up arrow"/>
                    </div>
                    <div class="four wide column">
                        <CardStatistic value={machines()?.filter((m) => !m.online).length.toString()} label="Offline" icon="power off"/>
                    </div>
                    <div class="four wide column">
                        <p>shit</p>
                    </div>
                </div>
            </div>

            <div class="ui grid">
                <div class="row">
                    <div class="twelve wide column">
                        <MachineTable id={"machineTable"} machines={machines()}></MachineTable>
                    </div>
                    <div class="four wide column">
                        <ListSegment title={"Links"} items={userLinks}></ListSegment>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevicesPage;