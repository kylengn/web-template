import { watchAuthInfo, watchAuth } from './ducks/Auth.duck';
import { watchLoadListings } from './containers/SearchPage/SearchPage.duck';
import { watchSdk } from './ducks/sdk.duck';

const createRootSaga = sdk =>
  function* rootSaga() {
    yield [watchAuthInfo(sdk), watchAuth(sdk), watchLoadListings(sdk), watchSdk(sdk)];
  };

export default createRootSaga;