import { useDispatch } from 'react-redux';

import * as actions from './redux/actions';

function App() {
  const dispatch = useDispatch();

  dispatch(actions.getPosts.getPostsRequest());

  return <p>This is Blog App</p>;
}

export default App;
