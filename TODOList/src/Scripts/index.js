import "../Styles/styles.scss";

import { createRoot } from 'react-dom/client';
import React, { StrictMode }  from "react";

import Contents from "./Shared/Contents";
import Footer   from "./Shared/Footer";

import { ViewProvider  } from "./Contexts/ViewContext";
import { EditsProvider } from "./Contexts/EditsContext";

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('react-root'));

  root.render(
    <StrictMode>
      <ViewProvider>
        <EditsProvider>
          <div id='content'>
            <Contents />
            <Footer   />
          </div>
        </EditsProvider>
      </ViewProvider>
    </StrictMode>
  );
});