var comments = `<main class="MessageBoard">
<h1 v-text="list.tips"></h1>
<div class="Bjq">
  <div class="editor_toolbar">
      <i class="iconfont icon-moon"></i>
      <span v-text=" list.userIs ? list.stateTrue[0] : list.stateFalse[0]"></span> 
      <a class="fr userText" v-text=" list.userIs ? list.stateTrue[1] : list.stateFalse[1]" @click="isdom.is = !isdom.is"></a>
  </div>
  <div class="editor_textarea">
    <textarea class="ant-input" name="" id="" cols="30" rows="10"></textarea>
  </div>
</div>
<div class="CommentList">
  <template v-for="(item,index) in data" :key="index">
    <div v-if=" isdom.loadOnly > index ">
      <div><small v-text="item.floor.num + item.floor.text"></small></div>
      <div class="ant-comment">

        <div class="ant-comment-inner">

          <div>
            <div class="redius">
              <div v-text="item.user.name.slice(0,1).toUpperCase()"></div>
            </div>
            <div class="right">
              <span v-text="item.user.name.slice(0,1)" class="spacing"></span>
              <del v-if="item.user.is">{{$store.dispatch('computedDate',item.user)}}</del>
              <span v-text=" item.user.interpolation "></span>
              <div v-text="item.user.content"></div>
              <div><a href="" style="color:rgba(0,0,0,.45);" v-text="item.floor.reply"></a></div>
            </div>
          </div>

          <div class="ceng" v-for="(value,key) in item.antComment" :key="key">
            <!-- {{value}} -->

            <div class="redius">
              <div v-text="value.user.name.slice(0,1).toUpperCase()"></div>
            </div>

            <div class="right">
              <span v-text="value.user.name.slice(0,1)" class="spacing"></span>
              <del v-if="value.user.is" v-text="$store.dispatch('computedDate',value.user)"></del>
              <span v-text=" value.user.interpolation "></span>
              <div v-text="value.user.content" ></div>
              <div><a href="" style="color:rgba(0,0,0,.45);" v-text="value.floor.reply"></a></div>
            </div>

          </div>

        </div>
      </div>

      <div class="ant-divider ant-divider-horizontal"></div>

    </div>
  </template>
 
  <div class="ant-divider" v-if="isdom.loadOnly < data.length"> 
    <div class="b1">
      <button type="button" class="ant-btn">
        <span v-text="isdom.loadMore"></span>
      </button>
    </div>
  </div>
</div>
</main>`
export default {
  name: "comments",
  template: comments,
  props: ["data", "list", "isdom"]
}