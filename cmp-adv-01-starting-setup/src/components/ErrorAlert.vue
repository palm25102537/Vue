<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
  dialog{
      position:absolute;
      top:20vh;
      left:30%;
      width:40%;
      background-color:#ffff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.26);
      margin:0;
      z-index:1;
  }
</style>
