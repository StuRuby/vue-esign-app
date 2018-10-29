<template>
    <div class="service-box">
        <div class="service-content">
            <div class="service-content-head">
                <ul>
                    <li class="width300">
                        <h1 class="world3">专业的电子合同服务</h1>
                    </li>
                    <li class="img353">
                        <img class="serviceLine" src="../../assets/images/服务02.png">
                    </li>
                </ul>
            </div>
            <div class="service-content-body">
                <ul>
                    <template v-for=" service in services ">
                        <service-item :service="service" :key="service.id"></service-item>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import serviceItem from "./serviceItem";
export default {
  name: "service-we-apply",
  data: function() {
    return {
      services: [
        {
          id: "001",
          title: "合同签署",
          detail:
            "无需面对面，极速签发有效电子合同; 实名认证+数字证书，确保身份真实; 领先的数字签名技术，有效防篡改"
        },
        {
          id: "002",
          title: "合同管理",
          detail:
            "提供合同检索、归档、下载等免费功能; 降低合同管理的仓储成本和人力成本; 海量存储空间，合同管理一站解决"
        },
        {
          id: "003",
          title: "在线编辑",
          detail:
            "云端合同编辑，省心又省时;合同模板上传，在线修改更方便; 500+合 同模板，满足各类签署需求"
        },
        {
          id: "004",
          title: "区块链存",
          detail:
            "领先的区块链存证平台;为客户提供专业的电子合同证据链; 与微软(中国) 、Onchain联合成立法链"
        }
      ]
    };
  },
  components: {
    serviceItem
  }
};
</script>

<style scoped>
.service-box {
  /* display: table; */
}
.fp-tableCell {
  /* display: table; */
}
.service-content {
  /* display: table-cell;
        vertical-align: middle; */
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
