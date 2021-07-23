import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>Page1DetailAです</h1>
      page1より引き継がれた情報：{state}
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
