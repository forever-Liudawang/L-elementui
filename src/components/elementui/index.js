import Col from './Col';
import Row from './Row';


const components = [Col, Row];
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
// export default {
//   install,
//   Col,
//   Row,
// };
export {
  install,
  Col,
  Row,
};
