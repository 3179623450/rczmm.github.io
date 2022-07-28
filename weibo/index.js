new Vue({
  el: "#myWeibo", // el不要是最外面的id_name，应该是html: ''里的div的id
  data: function () {
    return {
      content: [],
      classOption: {
        singleHeight: 30,
      },
    };
  },
  created() {
    this.getWeiboList();
  },
  methods: {
    getWeiboList() {
      fetch("https://tenapi.cn/resou/", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.content = data.list;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
});