import Counter from "@/component/ReduxJsCounter";
import store from "@/store/index-reduxjs";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};

export default Home;
