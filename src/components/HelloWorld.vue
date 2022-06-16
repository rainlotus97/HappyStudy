<template>
  <div class="hello">
    <a-upload :before-upload="beforeUpload">
      <a-button> <a-icon type="upload" /> Select File </a-button>
    </a-upload>
    <!-- <a-button
      type="primary"
      :disabled="fileList.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
      @click="handleUpload"
    >
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    </a-button> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import http from "@/utils/http";
import axios from 'axios'
export default Vue.extend({
  data() {
    // fileList: [],
    // uploading: false,
  },
  methods: {
    beforeUpload(file: any) {
      // this.fileList = [...this.fileList, file];
      this.fileToBase64(file, (base64: any) => {
        console.log(file.name, base64);

        this.getHttp(base64,file.name);
      });
      return false;
    },
    fileToBase64(file: any, cb: any) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (evt: any) {
        const base64 = evt.target.result.split(';')[1].replace('base64,','');
        cb(base64);
      };
    },
    async getHttp(base64: any, name: string) {
      const result = await http(
        "put",
        `/repos/rainlotus97/images/contents/document/${name}`,
        {
          message: "edit",
          content: base64,
        }
      );
      console.log(result);
    },
    getJson(){
      axios.get('/data/test.json')
      .then(res=>{
        console.log(res);
        
      }).catch(err=>{
        console.log(err);
        
      })
    }
  },
  mounted(){
    this.getJson()
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
