
function PageHeading(props: PageHeadingProps) {
    return (
        <h1 class='ui header'>
            {props.title}
            <span class='sub header'>{props.subtitle}</span>
        </h1>
    )
}

interface PageHeadingProps {
    title: string;
    subtitle?: string;
}

export default PageHeading;