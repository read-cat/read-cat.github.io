import { useDark } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useWindowStore = defineStore('Window', {
  state() {
    return {
      isDark: useDark()
    }
  },
  getters: {

  },
  actions: {

  }
});