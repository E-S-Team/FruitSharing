<template>
  <div class="home">
    <banner></banner>
    <list></list>
    <edit-button></edit-button>
    <div id="padding" class="row" style="height: 70px"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/views/currency/banner';
import List from '@/views/currency/list';
import EditButton from '@/views/currency/edit-button';


export default {
  components: {Banner, List, EditButton},
  name: 'home',
}
</script>
<style scoped>

</style>
