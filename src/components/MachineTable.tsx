import {createResource} from "solid-js";


import {A} from "solid-start";
import MachineTableRow from "~/components/MachineTableRow";

function MachineTable(props: any) {

    return (
        <div>

            <table class="ui table">
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
                <tfoot class="full-width">
                    <tr>
                        <th></th>
                        <th></th>
                        <th colspan="5">
                            <A href={"/dashboard/users/new"} class="ui right floated small primary labeled icon button">
                                <i class="plus icon"></i> New
                            </A>
                        </th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
}

export default MachineTable;