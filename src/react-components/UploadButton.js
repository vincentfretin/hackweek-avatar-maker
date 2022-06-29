import React from "react";

export function UploadButton({ onGLBUploaded }) {
  return (
    <label className="uploadButton btn-secondary" tabIndex="0">
      Upload custom part
      <input onChange={onGLBUploaded} type="file" id="input" accept="model/gltf-binary,.glb"></input>
    </label>
  );
}
