const ports: MessagePort[] = []

onconnect = function(e: MessageEvent) {
    const port = e.ports[0];
    ports.push(port)

    port.onmessage = function(event: MessageEvent) {
        if (event.data.command == 'closing') {
            const index = ports.indexOf(port);
            if (index !== -1) {
                ports.splice(index, 1);
            }
        } else {
            ports.forEach(p => p.postMessage({
                ...event.data,
                ports: ports.length
            }));
        }
    };

    port.start();
}
