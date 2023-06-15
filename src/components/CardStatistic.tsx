
function CardStatistic(props: CardStatisticProps) {

    return (
        <div class="ui fluid card">
            <div class="content">
                <div class="ui statistic">
                    <div class="value">
                        <i class={"icon " + props.icon}></i> {props.value}
                    </div>
                    <div class="label">
                        {props.label}
                    </div>
                </div>
            </div>
        </div>
    );

}

interface CardStatisticProps {
    icon?: string;
    value?: string;
    label?: string;
}

export default CardStatistic;