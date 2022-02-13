
var curriculumvitae = `<main class="bodylist bodyHtml" ref="add">
      
<section class="head-sass head-left" v-for="( val,index  ) in infor" :key="index">
  <h1 class="btn" v-text="val.name"></h1>

  <div class="content pa boxes">
      
    <div class="pd" v-for="( jacketed, layer ) in val.arr" :key="layer">
          
      <div :class="['row']" v-for="( pirce, bolt ) in jacketed" :key="bolt">
<!-- wis ? 'line3' : 'bg-gray-lightest'  -->
        <div :class="[ pirce.length == 1 ? 'bg-gray-lightest' : 'line3' ]" v-for="( value,key  ) in pirce" :key="key">

          <span v-if="!value.url && value.bold != true ">
            <a :title="value.tips + (value.sex ? val.push + value.sex + val.push : value.push ? value.push : val.push) + value.val">
              {{ value.tips + (value.sex ? val.push + value.sex + val.push : value.push ? value.push : val.push) + value.val }}
            </a>
          </span>

          <span v-else-if="value.url && value.bold != true  ">

            {{ value.tips + (value.sex ? val.push + value.sex + val.push : value.push ? value.push : val.push) }}
            <a :href="value.url" target="_blank" class="hrefurl" :title="value.val"> {{value.val}}</a>

          </span>

          <span v-else-if="value.bold == true ">
            <b>{{value.val}}</b>
          </span>

        </div>
            

      </div>
    
    </div>

  </div>  

</section>

</main>`
var a = {
  name: "curriculumvitae",
  template: curriculumvitae,
  props: ["infor"],
}
export default a;