<template>
    <li class="service">
        <svg aria-hidden="true" color="black" class="icon">
            <use xlink:href="#icon-weibiaoti-" class="green"></use>
        </svg>
        <h3 class="title">{{service.title}}</h3>
        <h5 class="detail">{{service.detail}}</h5>
    </li>
</template>

<script>
export default {
    props:{
        service:{
            type:Object,
        }
    }
};
</script>

<style scoped>


.service:hover {
  background-image: url("../../assets/images/服务01.png");
  text-shadow: 1px 0 10px #b5b5b5;
  font-size: 19px;
  transition: 0.4s;
  float: left;
}
.service {
  margin: 40px;
  background-image: url("../../assets/images/服务.png");
  width: 220px;
  height: 220px;
  float: left;
}
.icon {
  width: 40px;
  height: 40px;
  margin: 0 90px;
  margin-top: 20px;
  fill: #0093ff;
}
.service h3 {
  display: inline-block;
  width: 180px;
  text-align: center;
  margin: 2px 2px;
}
.service h5 {
  font-size: 12px;
  color: #858585;
  letter-spacing: -1px;
  display: inline-block;
  width: 180px;
  text-align: center;
  margin: 2px 20px;
}  
</style>
