export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  actions: {
    setUserActive(userId) {
      const index = this.users.findIndex((u) => u._id === userId);

      if (index > -1) {
        this.users[index].active = true;
      }
    },
    setUserInactive(userId) {
      const index = this.users.findIndex((u) => u._id === userId);

      if (index > -1) {
        this.users[index].active = false;
      }
    },
    addUsers(users) {
      for (const user of users) {
        this.addUser(user);
      }
    },
    addUser(user) {
      if (this.users.find((u) => u._id === user._id)) {
        return;
      }

      this.users.push({ ...user, active: false });
    },
    removeUser(userId) {
      this.users = this.users.filter((user) => user._id !== userId);
    },
  },
});
