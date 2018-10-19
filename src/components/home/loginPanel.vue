<template>
    <div>
        <div v-if="!login">
            <router-link to="/login" class="login-btn" tag="li" >登录</router-link>
            <router-link to="/register" class="login-btn" tag="li">注册</router-link>
        </div>
        <div v-else>
            <router-link to="personalCenter" class="login-btn" >个人中心</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "loginPanel",
  data() {
    return {
      login: false
    };
  },
  created() {
    const login = window.sessionStorage.getItem("login");
    if (!login) {
      this.login = false;
    } else {
      this.login = true;
    }
  }
};
</script>

<style>
</style>
