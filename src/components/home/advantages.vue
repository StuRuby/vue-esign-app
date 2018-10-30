<template>
    <div class="service-box">
        <div class="service-content">
            <div class="service-content-head">
                <ul>
                    <li class="width300">
                        <h1 class="world3">敏行，让签约更高效</h1>
                    </li>
                    <li class="img353">
                        <img class="serviceLine" src="../../assets/images/服务02.png">
                    </li>
                </ul>
            </div>
            <div class="service-content-body">
                <ul>
                    <template v-for=" (service,index) in services ">
                        <adv-item :index="index" :title="service.title" :content="service.content" :className="service.className" :key="service.id"></adv-item>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import advItem from "./advItem";
export default {
  name: "advantages",
  data: function() {
    return {
      services: [
        {
          id: "001",
          title: "便捷高效",
          content:
            "支持电脑网页、手机网页、微<br>信、APP随时签发、查阅<br>合同，高效协同。",
          img: "效率1",
          imgActive: "效率01",
          className: "efficient1"
        },
        {
          id: "002",
          title: "合法合规",
          content:
            "严格遵照《电子签名法》<br>相关规定，平台电子合同法<br>律效力获得仲裁/司法机构认可。",
          img: "效率2",
          imgActive: "效率02",
          className: "efficient2"
        },
        {
          id: "003",
          title: "安全稳定",
          content:
            "领先的信息运维机制严守数据<br>安全；数据传输军用级别<br>加密防止信息泄露。",
          img: "效率3",
          imgActive: "效率03",
          className: "efficient3"
        },
        {
          id: "004",
          title: "应用广泛",
          content:
            "标准API接入，完美兼<br>容各类系统。敏行签约平台<br>在线 签署，满足个性化需求。",
          img: "效率4",
          imgActive: "效率04",
          className: "efficient4"
        }
      ]
    };
  },
  components: {
    advItem
  }
};
</script>

<style scoped>
.service-box {
  background-image: url(../../assets/images/首页_04.jpg);
  background-size: cover;
  width: 100%;
  position: relative;
  padding: 100px 0px;
}
.fp-tableCell {
  /* display: table; */
}
.service-content {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
}
.service-content-head {
  position: relative;
  top: 130px;
}
.service-content-head ul {
  list-style: none;
}
.service-content-body {
  position: relative;
  top: 50%;
  margin-top: -260px;
  width: 1300px;
  margin-left: auto;
  margin-right: auto;
}
.service-content-body ul {
  position: relative;
  list-style: none;
}
</style>
