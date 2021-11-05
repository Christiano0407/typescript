import EditorJs from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";

const editor = new EditorJs({
  holderId: `editorjs`,

  tools: {
    header: {
      class: Header,
      inlineToolbar: [`link`],
    },
  },
});
