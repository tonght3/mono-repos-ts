import * as React from "react";
import * as HDModule from "my-module";
import * as HDModule1 from "module-1";

function App() {
  return (
    <div>
      <HDModule.HelloWorld />
      <HDModule.HDInput />
      <HDModule.HDTextarea />
      <HDModule1.HDTextarea />
    </div>
  );
}

export default App;
