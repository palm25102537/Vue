<template>
  <div class="container" > 
    <div class="block" :class="{animate:animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition >
      <p v-if="paraIsVisible">This is sometime visible....</p>
    </transition>
    <button @click="paraIsVisible = !paraIsVisible">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      dialogIsVisible: false,
      animatedBlock:false, 
      paraIsVisible:false
      };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock(){
      this.animatedBlock = !this.animatedBlock
    },
    toggleParagraph(){

    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.5s
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate{
  /* transform:translateX(300px) */
  animation: slide-fade 2s ease-out forwards
}

@keyframes slide-fade{
  0% {
    transform: translateX(80px)
  }
  70%{
    transform: translateX(-40px)
  }
  100%{
    transform: translateY(20px)
  }
}

.v-enter-from{
  opacity:0;
  transform:translateY(-30px)
}
.v-enter-active{
  transition: all 0.3s ease-out;
}
.v-enter-to{
   opacity:1;
  transform:translateY(0px)
}
.v-leave-form{
   opacity:1;
  transform:translateY(0px)
}
.v-leave-active{
 transition: all 0.3s ease-in;
}
.v-leave-to{
  opacity:0;
  transform:translateY(-30px)
}
</style>