<template>
  <div>
    <p>draggable検証</p>
    <p>Railsプログラムと連携してDBを更新します</p>
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
      arrayTitle1: [],
      arrayTitle2: [],
    }
  },
  computed: {
    items() {
      return this.$store.state.items.items
    },
  },
  async created() {
    await this.$store.dispatch('items/get')
    console.log('test')
    this.setItems()
  },
  async beforeUpdate() {
    await this.updates()
  },
  async beforeDestroy() {
    await this.updates()
  },
  methods: {
    setItems() {
      const allItems = this.items
      const title1 = []
      const title2 = []

      // 各配列に分類
      allItems.map((item) => {
        if (item.categoryNo === 1) {
          title1.push(item)
        } else {
          title2.push(item)
        }
      })

      // 格配列内での順序を設定
      title1.map((item, index) => {
        item.index = index
      })
      title2.map((item, index) => {
        item.index = index
      })
      this.arrayTitle1 = title1
      this.arrayTitle2 = title2
    },
    async updates() {
      const title1 = this.arrayTitle1
      const title2 = this.arrayTitle2

      title1.map((item, index) => {
        item.categoryNo = 1
        item.index = index
      })

      title2.map((item, index) => {
        item.categoryNo = 2
        item.index = index
      })

      const allItems = title1.concat(title2)

      await this.$store.dispatch('items/updates', allItems)
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
