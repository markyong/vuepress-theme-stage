<template>
  <div>
    <HomeLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style>

</style>
