import { useState, useEffect } from "react";
import axios from "axios";

const Resource = ({ path, render, refresh, breedType }) => {
  const initialState = {
    trans: [],
    loading: true,
    error: null,
  };

  const [image, setImage] = useState(true);
  const onClickFlip = () => {
    setImage((state) => {
      return !state;
    });
  };

  const [state, setState] = useState(initialState);

  const getData = async () => {
    try {
      const result = await axios.get(path);

      console.log(" result ", result);

      const newData = {
        trans: result.data,
        loading: false,
        error: null,
      };

      setState(newData);
    } catch (error) {
      console.log("error in get data", error.message);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  return (
    <div onClick={onClickFlip} className="flip" key={Math.random()}>
      {image ? render(state) : breedType(state)}
    </div>
  );
};

export default Resource;
