import Dative from "dativejs";
import { swing,flip,bubble } from "dativejs/animation";
import template from "./app.dative.html";

export let App = Dative.extend({
  data: () => ({
    displayContent: "",
    time: new Date().toLocaleTimeString(),
  }),
  template,
  animate: {
    swing,
    flip,
    bubble
  },
  onmounted() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString().normalize();
    }, 1000);
  },
  methods: {
    write(value) {
      this.displayContent = `${this.displayContent}${value}`;
    },
    back() {
      let _1 = this.displayContent;
      let _2 = _1.split("");
      _2.pop();
      this.displayContent = _2.join("");
    },
    clear() {
      this.displayContent = ``;
    },
    evaluate() {
      this.displayContent = eval(this.displayContent)
    }
  },
});
