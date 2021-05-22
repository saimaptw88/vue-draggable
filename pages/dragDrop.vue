<template>
  <div>
    <p>draggable検証</p>
    <div>空のカテゴリに移動できるかの検証</div>
    <div class="category">
      <p>title1</p>
      <draggable group="task" :list="arrayTitle1"
        ><div class="item" v-for="item in arrayTitle1" :key="item.no">
          {{ item.name }}
        </div></draggable
      >
    </div>
    <div class="category">
      <p>title2</p>
      <draggable group="task" :list="arrayTitle2"
        ><div class="item" v-for="item in arrayTitle2" :key="item.no">
          {{ item.name }}
        </div></draggable
      >
    </div>
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
      items: [],
      arrayTitle1: [
        { no: 1, name: 'キャベツ', categoryNo: '1' },
        { no: 2, name: 'ステーキ', categoryNo: '2' },
        { no: 3, name: 'リンゴ', categoryNo: '3' },
      ],
      arrayTitle2: [],
    }
  },
  computed: {
    muList() {
      return this.items
    },
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
