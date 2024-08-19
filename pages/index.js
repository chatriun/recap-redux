import ClassBaseCounter from "@/component/ClassBaseCounter";
import store from "@/store";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <Provider store={store}>
      <ClassBaseCounter />
    </Provider>
  );
};

export default Home;
