import {createResource} from "solid-js";


import {A} from "solid-start";
import { onMount } from "solid-js";
import MachineTableRow from "~/components/MachineTableRow";

import $ from "jquery";
import DataTable from "datatables.net-se";

function MachineTable(props: any) {

    /**
     * Machine Datatables which is intialised during
     */
    let machineTable;
    let machineTableOptions = {
        columnDefs: [
            { targets: 5, orderable: false }, /* Disable sorting on the action column */
        ]
    }

    onMount(async () => {
        machineTable = new DataTable(`#${props.id}`, machineTableOptions);
    });

    return (
        <div>
            <table id={props.id} class="ui table">
                <thead>
                <tr>
                    <th>Status</th>
                    <th>Machine</th>
                    <th>Addresses</th>
                    <th>Tags</th>
                    <th>Last Seen</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <For each={props.machines}>{(machine: MachineProperties, _: Number) =>
                    <MachineTableRow machine={machine} />
                }</For>
                </tbody>
            </table>
        </div>
    );
}

export default MachineTable;