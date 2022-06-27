import React from "react";
import { AppContainer, ContentWrapper } from "./components/styledComponents";

const App = () => {
  return (
    <AppContainer>
      <h1 className="text-4xl text-rose-400">Tip Calculator</h1>
      <ContentWrapper>
        <form className="w-1/2 p-5">
          <input className="w-full px-2 py-3 rounded-lg border border-rose-600 text-rose-400 bg-transparent outline-none" />
        </form>
      </ContentWrapper>
    </AppContainer>
  );
};

export default App;
