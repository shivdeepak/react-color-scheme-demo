import { useEffect, useMemo } from "react"
import useMediaQuery from "./useMediaQuery"
import { useLocalStorage } from "./useStorage"
import useEventListener from "./useEventListener"
import debounce from 'lodash/debounce';

export default function useDarkMode() {
  const [darkMode, setDarkMode, useSystemScheme] = useLocalStorage("useDarkMode")
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const enabled = darkMode ?? prefersDarkMode
  const source = (darkMode == undefined) ? "system" : "user"

  const worker = useMemo(() => new SharedWorker('useDarkModeWorker.js'), []);
  const tabId = useMemo(() => Math.random(), []);

  worker.port.onmessage = function(event) {
    if (tabId == event.data.tabId || event.data.command == 'closing') return
    debounce(() => document.body.classList.toggle("dark-mode", event.data.enabled), 300)();
    if (event.data.source == "system") {
        useSystemScheme()
    } else {
        setDarkMode(event.data.enabled)
    }
  };

  worker.port.start();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled)
    worker.port.postMessage({enabled, source, tabId});
  }, [enabled, source])

  useEventListener("beforeunload", () => {worker.port.postMessage({command:'closing'})})

  return [enabled, source, setDarkMode, useSystemScheme]
}
