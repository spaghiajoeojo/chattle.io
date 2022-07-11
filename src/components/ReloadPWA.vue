<template>
  <div v-if="offlineReady || needRefresh" class="flex flex-wrap" role="alert">
    <div class="message mt-1">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else
        >New content available, click on reload button to update.</span
      >
    </div>
    <div class="buttons flex align-middle mt-2 md:mt-0">
      <button v-if="needRefresh" @click="update()" class="button">
        Reload
      </button>
      <button @click="close" class="button">Close</button>
    </div>
  </div>
</template>
<script setup lang="ts">
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/vue';

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

const update = async () => {
  await updateServiceWorker();
};

Notification.requestPermission((permission) => {
  // If the user accepts, let's create a notification
  if (permission === 'granted') {
    console.log('Notification permission granted');
  }
});

const close = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
};
</script>
