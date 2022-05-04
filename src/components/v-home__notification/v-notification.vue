<template lang="html">
  <div class="v-home__notification-wrapper">
    <transition-group
    name="v-transition-animate"
    class="messages-list"
    >
      <div
      class="notification-container"
      v-for="message in messages"
      :key="message.id"
      >
        <font-awesome-icon icon="fa-solid fa-circle-check" />
        <span>{{message.text}}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    hideNotification() {
      let vm = this;
      if (this.messages.length) {
        setTimeout(function () {
          vm.messages.splice(vm.messages.length -1, 1)
        }, 5000)
      }
    }
  },
  watch: {
    messages () {
      this.hideNotification();
    }
  },
  mounted () {
    this.hideNotification();
  }
}
</script>

<style lang="scss" scoped>
* {transition: all .6s ease;}
.v-home__notification-wrapper {
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column-reverse;
  .notification-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: green;
    width: 200px;
    height: 20px;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 20px;
    z-index: 10;
    svg {
      color: white;
    }
    span {
      color: white;
      margin-left: 5px;
    }
  }
}

.v-transition-animate {
  &-enter {
    transform: translateX(120px);
    opacity: 0;
  }

  &-enter-active {
    transition: all .6s ease;
  }
  &-enter-to {
    opacity: 1;
  }

  &-leave {
    height: 40px;
    opacity: 1;
  }
  &-leave-active {
    transition: transform .6s ease, opacity .6s, height .6s .2s;
  }

  &-leave-to {
    height: 0;
    transform: translateX(120px);
    opacity: 0;
  }
}


</style>
