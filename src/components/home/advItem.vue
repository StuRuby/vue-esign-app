<template>
    <li :class="className">
        <template v-if="index%2===0">
            <h3 v-html="title"></h3>
            <h5 v-html="content"></h5>
        </template>
        <template v-else>
            <h5 v-html="content"></h5>
            <h3 v-html="title"></h3>
        </template>
    </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    index: {
      type: Number
    },
    className: {
      type: String
    }
  },
  methods: {}
};
</script>

<style scoped>
.efficient1 {
  float: left;
  margin: 40px 40px;
  background-image: url(../../assets/images/效率1.png);
  width: 176px;
  height: 172px;
  text-align: center;
}

.efficient1:hover {
  background-image: url(../../assets/images/效率01.png);
  text-shadow: 1px 0 10px #b5b5b5;
  font-size: 17px;
  color: aliceblue;
  transition: 0.4s;
}

.efficient1 h3 {
  display: inline-block;
  width: 180px;
  text-align: center;
  margin: 33px 0px 40px 0px;
}

.efficient1 h5 {
  font-size: 12px;
  color: #85c5b1;
  letter-spacing: 0px;
  display: inline-block;
  width: 170px;
  text-align: center;
  margin: 0px 0px;
}

.efficient2 {
  float: left;
  margin: 40px 40px;
  background-image: url(../../assets/images/效率2.png);
  width: 176px;
  height: 172px;
  text-align: center;
}

.efficient2:hover {
  background-image: url(../../assets/images/效率02.png);
  font-size: 17px;
  color: aliceblue;
  transition: 0.4s;
}

.efficient4 h3,
.efficient2 h3 {
  /* display: inline-block; */
  width: 180px;
  text-align: center;
  margin: -2px -4px;
}

.efficient2 h5 {
  font-size: 12px;
  color: #ee825e;
  letter-spacing: -1px;
  display: inline-block;
  width: 170px;
  text-align: center;
  margin: 29px 0px 33px 0px;
}

.efficient3 {
  float: left;
  margin: 40px 40px;
  background-image: url(../../assets/images/效率3.png);
  width: 176px;
  height: 172px;
  text-align: center;
}

.efficient3:hover {
  background-image: url(../../assets/images/效率03.png);
  text-shadow: 1px 0 10px #b5b5b5;
  font-size: 17px;
  color: aliceblue;
  transition: 0.4s;
}

.efficient3 h3 {
  display: inline-block;
  width: 180px;
  text-align: center;
  margin: 33px 0px 40px 0px;
}

.efficient3 h5 {
  font-size: 12px;
  color: #60abd9;
  letter-spacing: 0px;
  display: inline-block;
  width: 170px;
  text-align: center;
  margin: 0px 0px;
}

.efficient4 {
  float: left;
  margin: 40px 40px;
  background-image: url(../../assets/images/效率4.png);
  width: 176px;
  height: 172px;
  text-align: center;
}

.efficient4:hover {
  background-image: url(../../assets/images/效率04.png);
  font-size: 17px;
  color: aliceblue;
  transition: 0.4s;
}

/* 
.efficient4 h3 {
  display: inline-block;
  width: 180px;
  text-align: center;
  margin: -2px -2px;
} */
.efficient4 h5 {
  font-size: 12px;
  color: #e99e10;
  letter-spacing: 0px;
  display: inline-block;
  width: 170px;
  text-align: center;
  margin: 29px 0px 33px 0px;
}
</style>
