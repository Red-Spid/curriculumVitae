var dropBYdrop = `<div class="bodyList">
<div class="artical" v-for="(item,index) in data" :key="index">
  <div class="dotts"></div>
    <a class="date" :href="item.url">
        <span class="trig"></span>
        <span class="dates" v-text="item.date"></span>
    </a>
    <div class="art-container">
      <div class="line"></div>
      <div class="art-content">
        <p class="art-title">
          <a href="/detail?id=5e9efd26601bd82819211a1e"
            v-text="item.tips"></a>
        </p>
        <div class="art-img">
          <img :src="originImage + item.img" :alt="item.alt" />
        </div>
        <div class="art-detail">
          <p v-text="item.introduce"></p>
        </div>
      </div>
    </div>
</div>

</div>`
export default {
  name: "dropBYdrop",
  template: dropBYdrop,
  props: ["data"],
  data(){
    return{
      originImage:""
    }
  },
  mounted() {
    this.originImage = this.$store.state.origin + this.$store.state.image;
    console.log(this.$store.state.originImage)
  },
}