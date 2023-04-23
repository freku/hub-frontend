<script setup>
const { data: scripts, pending: loading } = useLazyFetch("scripts", {
  method: "get",
  ...basicWithCredentials({ immediate: true }),
});

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "scale(1.1)";
};

const enter = (el, done) => {
  const delay = el.dataset.index * 100;

  setTimeout(() => {
    el.style.transition = "opacity 0.5s, transform 0.5s";
    el.style.opacity = 1;
    el.style.transform = "scale(1)";
    done();
  }, delay);
};
</script>

<template>
  <div>
    <div
      class="flex justify-center items-center py-[15px] mx-[10px] border-b-2"
    >
      <p class="text-2xl">LIST OF SCRIPTS</p>
    </div>
    <div v-if="!loading" class="p-5 flex flex-col space-y-5">
      <TransitionGroup appear @before-enter="beforeEnter" @enter="enter">
        <ScriptItem
          v-for="(script, index) in scripts"
          :key="script.name"
          :script="script"
          :data-index="index"
        />
      </TransitionGroup>
    </div>
    <!-- <SkeletonsScriptList v-else /> -->
    <!-- TODO: usunac Skeleton jesli na deployu dane szybko beda sie ladowac -->
  </div>
</template>
