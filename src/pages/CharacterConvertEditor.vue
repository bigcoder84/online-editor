<template>
  <div style="width: 80%;margin-left: auto;margin-right: auto;">
    <h1>富文本转HTML工具</h1>
    <div id="editor">
      <h3>欢迎使用富文本转HTML工具</h3>
    </div>
    <div>
      ||
    </div>
    <textarea id="text" style="width:99%; height: 500px"></textarea>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import xmlFomatter from "@/utils/xmlFomatter";

export default {
  name: "editor",
  methods: {},
  mounted() {
    const editor = new Editor('#editor');
    //高度
    editor.config.height = 500
    // 菜单栏
    editor.config.menus = [
      'head',
      'justify',
      'bold',
      'fontSize',
      'fontName',
      'italic',
      'underline',
      'strikeThrough',
      'indent',
      'lineHeight',
      'foreColor',
      'backColor',
      'link',
      'list',
      'quote',
      'emoticon',
      'image',
      'table',
      'splitLine',
      'undo',
      'redo',
    ]

    editor.config.onchange = (html) => {
      // 监控变化，同步更新到 textarea
      document.getElementById("text").value = xmlFomatter(html);
    }
    editor.create();
  }
}

</script>

<style scoped>

</style>