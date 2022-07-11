<script setup>
import { nextTick, ref, watch } from 'vue';
import Message from '../classes/Message';
import MessageComponent from './MessageComponent.vue';

// DOM references
const messageList = ref(null);
// reactive
const messageText = ref(null);
const messages = ref([]);
const loading = ref(false);
// methods
const sendMessage = () => {
  if (!messageText.value) return;
  const text = messageText.value;
  messages.value = [...messages.value, new Message({ text, from: 'me' })];
  loading.value = true;
  loading.value = false;
  messageText.value = null;
};
watch(messages, () => {
  nextTick(() => {
    messageList.value.scrollTop = messageList.value.scrollHeight;
  });
});
</script>

<template>
  <div class="chat">
      <div class="chat-messages" ref="messageList">
        <message-component
          v-for="(msg, index) in messages"
          :key="index"
          :message="msg"
        >
        </message-component>
      </div>
      <form class="chat-bottom" @submit.prevent="sendMessage">
        <input v-model="messageText" type="text" />
        <button>Send</button>
      </form>
  </div>
</template>

<style scoped>
.chat {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.chat-messages {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.chat-bottom {
  padding: 0.5rem;
  align-self: flex-end;
  display: flex;
  width: 100%;
  box-sizing: border-box;
}
.chat-bottom > input {
  flex-grow: 1;
}
.chat-messages::before {
  min-height: 1rem;
  display: flex;
  flex-grow: 1;
  content: "";
}
</style>
