import {A} from "solid-start";
import MachineStatusLabel from "~/components/MachineStatusLabel";
import Machines from "~/routes/dashboard/machines";
import {MachineProperties} from "~/lib/headscale";

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)


function MachineTableRow(props: any) {

    const machine: MachineProperties = props.machine;

    return (
        <>
            <tr>
                <td class={"collapsing"}>
                    <MachineStatusLabel machine={machine} />
                </td>
                <td>
                    <A href={machine.id}>
                        {machine.name}
                    </A>
                </td>
                <td>
                    <code>
                        {machine.ipAddresses.map((ipAddress: string) => ipAddress).join(", ")}
                    </code>
                </td>
                <td>
                    {machine.validTags.map((tag: string) => tag).join(", ")}
                    {machine.forcedTags.map((tag: string) => tag).join(", ")}
                    {machine.invalidTags.map((tag: string) => tag).join(", ")}
                </td>
                <td class={"collapsing"}>
                    {dayjs(machine.lastSeen).fromNow()}
                </td>
                <td class={"collapsing right aligned"}>
                        <i class="ellipsis horizontal icon"></i>
                </td>
            </tr>
        </>
    )
}

export default MachineTableRow;