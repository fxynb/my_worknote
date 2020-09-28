<template>
   <div class="about">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage() }}"</p>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      message:'hello'
    }
  },
  //通过computed进行计算
  computed:{
    //默认是getter属性
    // reversedMessage:function () {
    //   console.log(this.message.split('').reverse().join(''))  // ["h", "e", "l", "l", "o"]   join() 方法用于把数组中的所有元素放入一个字符串。
    //     return this.message.split('').reverse().join('')
    //   console.log(this.message.jion(''))  //报错，不是数组
    // }
  },

  //用方法的方式
  methods:{
    reversedMessage:function () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

<style>

</style>