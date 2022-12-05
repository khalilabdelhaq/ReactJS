import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemComponent from "../../molecules/ItemComponent/ItemComponent";
import { getItemsRequest } from "../../redux/actions";
import { RootState } from "../../redux/rootReducer";
import { Styles } from "./Home.style";

const Home: React.FC<{}> = () => {
  const items = useSelector((state: RootState) => state.items.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItemsRequest());
  }, [dispatch]);
  return (
    <>
      <Styles.Container>
        {items.map((item) => (
          <ItemComponent key={item.id} item={item}></ItemComponent>
        ))}
      </Styles.Container>
    </>
  );
};

export default Home;
