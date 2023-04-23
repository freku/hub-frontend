<script setup>
const terminalElement = ref(null);

const { terminal } = useTerminal(() => terminalElement.value);

const socketStore = useSocketStore();

socketStore.socket.on("script:output", (txt) => {
  console.log("🧳 ws data incoming...");

  terminal.write(txt ?? "Hello, world!");
});

socketStore.socket.on("connect", () => {
  console.log("🤖 Connected to server 👀");
});
</script>

<template>
  <div class="flex flex-col grow min-h-0">
    <div
      class="terminal-header bg-theme-terminal rounded-t-xl py-2 px-5 border-b-theme-terminal-border border-b"
    >
      <p class="text-theme-white text-[10px]">TERMINAL 💡🚀✨</p>
    </div>
    <div ref="terminalElement" class="grow" id="terminal"></div>
  </div>
</template>

<style>
.xterm {
  padding: 10px;
}

.xterm-viewport {
  border-radius: 0 0 12px 12px;
}
</style>
