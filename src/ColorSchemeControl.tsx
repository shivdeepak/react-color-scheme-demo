import useDarkMode from "./hooks/useDarkMode";

export default function ColorSchemeControl(): JSX.Element {
    const [darkMode, source, setDarkMode, useSystemScheme] = useDarkMode()
    const label = (source === "system") ? "System" : (darkMode ? "Dark Mode" : "Light Mode")
    const icon = (source === "system") ? "system" : (darkMode ? "moon" : "sun")

    function handleChange() {
        // system -> light -> dark -> system
        if (source === "system") {
            setDarkMode(false)
        } else if (source === "user" && darkMode === false) {
            setDarkMode(true)
        } else if (source === "user" && darkMode === true) {
            useSystemScheme()
        }
    }

    return (
        <div className="color-scheme-card" onClick={handleChange}>
            <a className={"icon " + icon}></a>
            <p className="label">{label}</p>
        </div>
    )
}
