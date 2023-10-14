import ReferenceLink from "./ReferenceLink";

export default function ReferenceLinks() {
    return (
        <div className="reference-links">
            <ReferenceLink
                icon="info"
                label="Read Me"
                link="https://github.com/shivdeepak/react-color-scheme-demo/blob/main/README.MD"/>
            <ReferenceLink
                icon="fork"
                label="Git Repo"
                link="https://github.com/shivdeepak/react-color-scheme-demo"/>
        </div>
    )
}
