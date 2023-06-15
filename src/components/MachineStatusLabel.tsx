import {MachineProperties} from "~/lib/headscale";

function MachineStatusLabel(props: any) {

    const machine: MachineProperties = props.machine;

    /**
     * If the machine is online, return a green label with the text "Online".
     */
    const statusOnline =
        <span class="ui basic green label">
            Online
        </span>;

    /**
     * If the machine is offline, return a red label with the text "Offline".
     */
    const statusOffline =
        <span class="ui basic red label">
            Offline
        </span>;


    return (
        <div>
            { machine.online ? statusOnline : statusOffline}
        </div>
    );
}

export default MachineStatusLabel;