<template>
  <div class="reg">
    <p>
      <label>
        <span>用户名:</span>
        <input v-model="username">
      </label>
    </p>
    <p>
      <label>
        <span>密码:</span>
        <input v-model="password">
      </label>
    </p>
    <p>
      <label>
        <span>头像:</span>
        <i v-fileUpload="setInputFile">点击上传头像</i>
      </label>
    </p>
    <p>
      <label>
        <span>昵称:</span>
        <input v-model="name">
      </label>
    </p>
    <p>
      <button class="log" @click="Mockreg">注册</button>
    </p>
    <img :src="url" alt>
  </div>
</template>
<script>
import Mock from "mockjs";
export default {
  name: "reg",
  data() {
    return {
      username: "",
      password: "",
      name: "",
      setInputFile: {
        fn: "fileUpload", //函数
        multiple: false //设置是否多张上传
      },
      url: ""
    };
  },
  methods: {
    fileUpload(url) {
      this.url = url;
    },
    Mockreg() {
      var params = {
        username: this.username,
        password: this.password,
        // avatar: this.url,
        name: this.name,
        id: Mock.Random.guid()
      };
      this.$apis.Mockreg(params).then(res => {
        console.log(res);
        if (res.data.data.code == 1) {
          alert("注册成功");
        } else if (res.data.data.code == -1) {
          alert("信息不完整");
        } else {
          alert("用户名已经存在");
        }
        // console.log(res);
      });
    }
  },
  mounted() {
    // this.Mockreg();
  }
};
</script>
<style lang="scss" scoped>
.reg {
  width: 100%;
  height: 160vw;
  p {
    width: 80%;
    padding-left: 18%;
    height: 10vw;
    span {
      display: block;
      float: left;
      width: 20%;
      height: 100%;
    }
    i {
      display: block;
      float: left;
      height: 100%;
      width: 50%;
      margin-left: 10%;
      border: 1px solid #b9e9eb;
      font-style: normal;
    }
    input {
      display: block;
      float: left;
      height: 100%;
      width: 50%;
      margin-left: 10%;
      border: 1px solid #b9e9eb;
    }
    .log {
      width: 20vw;
      height: 10vw;
      margin-left: 30%;
      border: 1px solid #b9e9eb;
      background: #7cf1f5;
    }
  }
}
</style>
