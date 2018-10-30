<template>
    <section ref="$box" class="c-sticky-box" :style="boxStyle">
        <div ref="$content" class="content" :style="contentStyle">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
  props: {
    top: {
      type: [String],
      default: "unset"
    },
    left: {
      type: [String],
      default: "unset"
    },
    bottom:{
        type:[String],
        default:'unset'
    }
  },
  data() {
    return {
      boxStyle: {
        position: "static",
        top: 0,
        left: 0,
        width: "auto",
        height: "auto"
      },
      contentStyle: {
        position: "static",
        top: 0,
        left: 0,
        width: "auto",
        height: "auto"
      },
      isFixedX: false,
      isFixedY: false,
      isSupport: this.cssSupport("position", "sticky") //是否支持 `css sticky`
    };
  },
  mounted() {
    if (!this.isSupport) {
      this.getContentSize();
      this.scrollHandler();
      window.addEventListener("resize", this.onResize);
      window.addEventListener("scroll", this.scrollHandler, true);
    } else {
      this.boxStyle = {
        position: "fixed",
        top: this.top,
        width:'100%',
        // bottom:this.bottom,
        left: this.left,
        zIndex:9999
      };
    }
  },
  beforeDestroy() {
    if (!this.isSupport) {
      window.removeEventListener("resize", this.onResize);
      window.removeEventListener("scroll", this.scrollHandler, true);
    }
  },
  methods: {
    cssSupport(attr, value) {
      let element = document.createElement("div");
      if (attr in element.style) {
        element.style[attr] = value;
        return element.style[attr] === value;
      } else {
        return false;
      }
    },
    getContentSize() {
      const style = window.getComputedStyle(this.$refs.$content);
      this.boxStyle.width = style.width;
      this.boxStyle.height = style.height;
      
    },
    onResize() {
      const { $box } = this.$refs;
      const { contentStyle } = this;
      const boxTop = $box.getBoundingClientRect().top;
      const boxLeft = $box.getBoundingClientRect().left;

      if (contentStyle.position === "fixed") {
        contentStyle.top = this.top === "unset" ? `${boxTop}px` : this.top;
        contentStyle.left = this.left === "unset" ? `${boxLeft}px` : this.left;
      }
    },
    scrollHandler() {
      const { $content, $box } = this.$refs;
      const { contentStyle } = this;
      const boxTop = $box.getBoundingClientRect().top;
      const boxLeft = $box.getBoundingClientRect().left;
      const contentTop = $content.getBoundingClientRect().top;
      const contentLeft = $content.getBoundingClientRect().left;

      if (this.top !== "unset") {
        if (boxTop > parseInt(this.top) && this.isFixedY) {
          this.isFixedY = false;
          contentStyle.position = "static";
        } else if (boxTop < parseInt(this.top) && !this.isFixedY) {
          this.isFixedY = true;
          contentStyle.position = "fixed";
          this.onResize();
        }
      }

      if (this.left !== "unset") {
        if (boxLeft > parseInt(this.left) && this.isFixedX) {
          this.isFixedX = false;
          contentStyle.position = "static";
        } else if (boxLeft < parseInt(this.left) && !this.isFixedX) {
          this.isFixedX = true;
          contentStyle.position = "fixed";
          this.onResize();
        }
      }

      if (contentTop !== boxTop && this.top === "unset") {
        this.onResize();
      }
    }
  }
};
</script>

<style>
</style>
