import { createStore } from "vuex";
import axios from "axios";

let store = createStore({
  state: {
    data: [],
    dataBoards: [],
    isLoading: false,
    isError: false,
    activeBoard: 1,
  },
  mutations: {
    setActiveBoard: (state, action) => {
      state.activeBoard = action;
      console.log(state.activeBoard);
    },
  },

  actions: {
    async fetchData(context) {
      context.state.isLoading = true;
      try {
        let response = await axios.get("http://localhost:3004/data");
        context.state.data = response.data;
      } catch (error) {
      } finally {
        context.state.isLoading = false;
      }
    },

    async fetchDataBoard(context) {
      context.state.isLoading = true;
      try {
        let response = await axios.get("http://localhost:3004/boards");
        context.state.dataBoards = response.data;
      } catch (error) {
      } finally {
        context.state.isLoading = false;
      }
    },

    async fetchDataDelet(context, action) {
      await axios.delete(`http://localhost:3004/data/${action.id}`);

      context.dispatch("fetchData");
    },

    async fetchDataPost(context, action) {
      context.state.isLoading = true;
      try {
        await axios.post("http://localhost:3004/data", {
          name: action,
          complated: false,
          boardId: this.state.activeBoard,
        });
      } catch (error) {
        console.log(error);
      } finally {
        context.state.isLoading = false;
      }

      context.dispatch("fetchData");
    },

    async editTask(context, action) {
      let value = prompt(`after name: ${action.name}`);

      if (value == null) return;

      if (value !== "") {
        await axios.put(`http://localhost:3004/data/${action.id}`, {
          ...action,
          name: value,
        });

        context.dispatch("fetchData");
      }
    },

    async editTaskComplated(context, action) {
      await axios.put(`http://localhost:3004/data/${action.item.id}`, {
        id: action.item.id,
        name: action.item.name,
        complated: true,
        boardId: this.state.activeBoard,
      });

      context.dispatch("fetchData");
    },

    async editTaskComplatedFalse(context, action) {
      await axios.put(`http://localhost:3004/data/${action.item.id}`, {
        id: action.item.id,
        name: action.item.name,
        complated: false,
        boardId: this.state.activeBoard,
      });

      context.dispatch("fetchData");
    },

    async fetchBoardPost(context, action) {
      context.state.isLoading = true;

      let value = prompt(`Board name edit`);

      if (value == null) return;

      if (value !== "") {
        try {
          await axios.post("http://localhost:3004/boards", {
            name: value,
          });
        } catch (error) {
          console.log(error);
        } finally {
          context.state.isLoading = false;
        }

        context.dispatch("fetchDataBoard");
      }
    },
  },
});

export default store;
