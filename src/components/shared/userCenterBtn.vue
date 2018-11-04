<template>
    <div class="home-words">
        <div class="homePageHead">
            <div class="homePageBtn1">
                <router-link to="/login" class="login-log">登录</router-link>
                <router-link to="/register" class="login-log">注册</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .home-words {
  float: right;
} */
.homePageHead {
  position: absolute;
  top: 15px;
  right: 300px;
}
.login-log {
  text-decoration: none;
  display: inline-block;
  line-height: 20px;
  font-size: 13px;
  height: 20px;
  padding: 2px 10px 3px;
  border: 1px solid #be926f;
  color: #be926f;
  background: transparent none;
  border-radius: 5px;
  margin: 0 5px;
}
.login-log:hover {
  color: #ffffff;
  background: #be926f;
}
</style>
