export default {
  name: 'ElCol',

  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    tag: {
      type: String,
      default: 'div',
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],

  },
  data() {
    return {

    };
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : '';
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = `${this.gutter / 2}px`;
      }
      return style;
    },
    classList() {
      const classList = ['el-col', `el-col-span-${this.span}`, this.offset === 0 ? '' : `el-col-offset-${this.offset}`];
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          classList.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          Object.keys(this[size]).forEach((prop) => {
            classList.push(`el-col-${size}-${prop}-${this[size][prop]}`);
          });
        }
      });
      return classList;
    },
  },
  methods: {},
  created() {
    console.log(this.tag, this.props);
  },
  render(h) {
    console.log(this.tag, this);
    return h(this.tag, {
      style: this.style,
      class: this.classList,
    }, this.$slots.default);
  },
};
