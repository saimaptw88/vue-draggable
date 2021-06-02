<template>
  <div>
    <p>draggable検証</p>
    <p>フロントのみでのD＆Dです。更新すると元に戻ります</p>
    <div class="category">
      <p>title1</p>
      <draggable :list="arrayTitle1" group="items"
        ><div class="item" v-for="item in arrayTitle1" :key="item.id">
          {{ item.name }}
        </div></draggable
      >
    </div>
    <div class="category">
      <p>title2</p>
      <draggable :list="arrayTitle2" group="items"
        ><div class="item" v-for="item in arrayTitle2" :key="item.id">
          {{ item.name }}
        </div></draggable
      >
    </div>
    <v-btn color="primary" @click="updates">更新</v-btn>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      arrayTitle1: [
        {
          id: 0,
          name: 'apple',
          categoryNo: 1,
        },
        {
          id: 1,
          name: 'amazon',
          categoryNo: 1,
        },
        {
          id: 2,
          name: 'google',
          categoryNo: 1,
        },
      ],
      arrayTitle2: [
        {
          id: 4,
          name: 'facebook',
          categoryNo: 2,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.item {
  border: 1px solid white;
  margin: 3px;
  background-color: gray;
}
.category {
  border: 1px solid white;
  margin: 10px 5px;
  min-height: 150px;
}
</style>
