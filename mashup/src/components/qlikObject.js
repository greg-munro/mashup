import React, { useEffect, useState } from "react";

const QlikObject = (props) => {
  const {
    qlikApp,
    objectId,
    elementId,
    style = {},
    classes = "",
    env,
    options,
  } = props;
  const [model, setModel] = useState(null);
  console.log("test", props);

  useEffect(() => {
    let _model;
    console.log("test2", qlikApp);
    // qlikApp.getObject &&
    qlikApp.getObject(elementId, objectId).then((objModel) => {
      setModel(objModel);
    });
    return () => {
      //   if (_model) {
      //     _model.close();
      //     _model.removeAllListeners();
      //   }
      //   qlikApp.destroySessionObject && qlikApp.destroySessionObject(objectId);
    };
  }, []);
  return (
    <>
      <div id={elementId} className={classes} style={style}></div>
    </>
  );
};

export default QlikObject;
