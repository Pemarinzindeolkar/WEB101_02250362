import { useCallback } from 'react';


export default function Dropzone({ setFile }) {
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const uploaded = e.dataTransfer.files[0];
    setFile(uploaded);
  }, [setFile]);

  const handleChange = (e) => setFile(e.target.files[0]);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{ border: '2px dashed #ccc', padding: '20px', marginBottom: '10px' }}
    >
      <p>Drag and drop a file here, or click to select a file</p>
      <input type="file" onChange={handleChange} />
    </div>
  );
}