import React from 'react';
import { Provider } from 'react-redux';

import store from "./services/store";
import history from "./services/history";
import { AppContainer } from "./AppContainer";
import { queryClient} from "./services/queryClient";
import { QueryClientProvider} from "react-query";
import "./shared/styles/main.scss";

function App() {
  return (
    <Provider store={store}>
        <QueryClientProvider client={queryClient} >
            <AppContainer
                history={history}
            />
        </QueryClientProvider>
    </Provider>
  );
}

export default App;
