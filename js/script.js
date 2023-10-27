const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "welcome to vue js bitch <3",
      img: "img/halloween.jpg",
      sizing: "display-1",
      color: "cadetblue",
      weight: "fw-bold",
      bg: "bg-main"
    }
  },
  methods: {
    enlarging(){
      this.title.classList.add("wow")
    }
  }
}).mount("#app");
