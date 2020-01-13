export default {
  name: 'ElRow',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    tag: {
      type: String,
      default: 'div',
    },
    type: String,
    justify: {
      type: String,
      default: 'start',
      validator: val => ['start', 'end', 'center', 'space-around', 'space-between'].includes(val),
    },
    align: {
      type: String,
      default: 'top',
      validator: val => ['top', 'middle', 'bottom'].includes(val),
    },
  },
  data() {
    return {

    };
  },
  computed: {
    style() {
      const style = {};
      style.marginLeft = `${-this.gutter / 2}px`;
      style.marginRight = `${-this.gutter / 2}px`;
      return style;
    },
  },
  methods: {},
  render(h) {
    return h(this.tag, {
      class: ['el-row',
        this.type === 'flex' ? 'el-row--flex' : '',
        `flex-justify-${this.justify}`,
        `flex-align-${this.align}`,
      ],
      style: this.style,
    }, this.$slots.default);
  },
};
