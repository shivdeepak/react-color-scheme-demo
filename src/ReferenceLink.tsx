interface ReferenceLinkProps {
    icon: string;
    label: string;
    link: string;
}

export default function ReferenceLink({icon, label, link}: ReferenceLinkProps) {
    return (
        <a className={`reference-link ${icon}`} href={link} target="_blank" rel="noreferrer">
            <p className="label">{label}</p>
        </a>
    )
}
