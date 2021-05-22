<template>
  <div class="container mt-5">
    <div class="row mt-5">
      <a
        href="https://javascript.plainenglish.io/building-a-kanban-board-with-vue-js-and-vuedraggable-in-15-minutes-496dbe3685e2"
        >参考サイト</a
      >
      <div class="col-3">
        <div class="p-2 alert alert-secondary">
          <h3>Back Log</h3>
          <draggable
            class="list-group kanban-column"
            :list="arrBackLog"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrBackLog"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-primary">
          <h3>In Progress</h3>
          <draggable
            class="list-group kanban-column"
            :list="arrInProgress"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrInProgress"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>
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
      newTask: '',
      arrBackLog: [
        { name: 'Code Sign Up Page' },
        { name: 'Test Dashboard' },
        { name: 'Style Registration' },
        { name: 'Help with Designs' },
      ],
      arrInProgress: [],
      arrTested: [],
      arrDone: [],
    }
  },
}
</script>

<style>
.kanban-column {
  min-height: 300px;
}
</style>
