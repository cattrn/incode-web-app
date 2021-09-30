TODO: Update this readme, along with server and client readmes

Design: https://www.figma.com/file/cBKUPF3pRxLtwRtfVT8ec8/INCO-LMS-Design-draft2-by-Cat

## Folder Structure

```bash
/.vscode # VSCode settings (originally for formatting on save)
/client # front-end code
/server # back-end code
CONTRIBUTING.md
README.md
package.json
```

## Installation

After clone and cd'ing into the root directory, the script install-all will install dependencies in the root folder, client folder and server folder.

```bash
npm run install-all
```

TODO: Various DB config and what not are still to come.

Run both server and client via the root folder. Utilises _concurrently_.

```bash
npm run dev
```

Alternatively, you can cd into either server or client folder and run then individually.
