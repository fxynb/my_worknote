<template>
   <div class="about">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      message:'hello'
    }
  },
  computed:{
    //通过computed进行计算
    //默认是getter属性
    reversedMessage:function () {
      // console.log(this.message.split(''))  // ["h", "e", "l", "l", "o"]
      console.log(this.message.jion(''))  //
    }
  }
}
</script>

<style>

</style>