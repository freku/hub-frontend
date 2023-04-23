import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";

import "xterm/css/xterm.css";

export const useTerminal = (getTerminalElementCb) => {
  const terminal = new Terminal({
    theme: {
      background: "#0F172A",
    },
  });

  const fitAddon = new FitAddon();

  onMounted(() => {
    const terminalElement = getTerminalElementCb();

    terminal.loadAddon(fitAddon);
    terminal.options.fontSize = terminalElement.clientWidth / 57;

    terminal.open(terminalElement);
    fitAddon.fit();
  });

  return {
    terminal,
  };
};
