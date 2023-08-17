import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchVideos from "./components/SearchVideos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubscriptionPage from "./components/SubscriptionPage";
import LibraryPage from "./components/LibraryPage";
import HistoryPage from "./components/HistoryPage";
import WatchLaterPage from "./components/WatchLaterPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainContainer />} />
              <Route path="watch" element={<WatchPage />} />
              <Route path="search/:searchQuery" element={<SearchVideos />} />
              <Route path="search" element={<MainContainer />} />
              <Route path="subscription" element={<SubscriptionPage />} />
              <Route path="library" element={<LibraryPage />} />
              <Route path="history" element={<HistoryPage />} />
              <Route path="watchLater" element={<WatchLaterPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/**
 *  Head
 *  Body
 *    -Sidebar
 *        -MenuItems
 *  MainContainer
 *    -Buttonslist
 *    - VideoContainer
 *        -VideoCard
 */
