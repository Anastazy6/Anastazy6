import React from "react";

import Navbar from "./Navbar";

import AllProjects   from "../Projects/AllProjects";
import SingleProject from "../Projects/SingleProject";
import SingleTask    from "../Tasks/SingleTask";
import About         from "../About/About";

import { useView }         from "../Contexts/ViewContext";
import { useViewDispatch  } from "../Contexts/ViewContext";
import { useEditsDispatch } from "../Contexts/EditsContext";


function Contents () {
  const view          = useView();
  const dispatchView  = useViewDispatch();
  const dispatchEdits = useEditsDispatch();


  function renderView (view) {
    switch (view.type) {
      case 'singleProject': {
        return <SingleProject projectId={view.itemId} />;
      }
      case 'allProjects': {
        return <AllProjects />
      }
      case 'singleTask': {
        return (
          <SingleTask 
            taskId={view.itemId.task} 
            hostProjectId={view.itemId.host}
          />
        );
      }
      case 'about': {
        return <About />
      }
      default: {
        console.warn(`View "${view.type}" is invalid. Rendering all projects instead.`);
        return <AllProjects />
      }
    }
  }

  // TODO (optional): refactor, as it does 2 things
  function handleSwitchView (type, itemId=null) {
    dispatchEdits({
      type: "switched_view"
    });
    dispatchView({
      type: "switched_view",
      nextView: {
        type              : type,
        itemId            : itemId,
        newItemFormVisible: false
      }
    });
  }

  return (
    <>
      <Navbar 
        onSwitchView={handleSwitchView}
      />
      <main>
        {renderView(view)}
      </main>
    </>
  );
}


export default Contents