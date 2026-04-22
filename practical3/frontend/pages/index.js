import { useState } from 'react';
import axios from 'axios';

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

// ---------------- DROPZONE ----------------
function Dropzone({ setFile }) {
  const [preview, setPreview] = useState(null);
  const [isHover, setIsHover] = useState(false);

  const handleFile = (file) => {
    setFile(file);

    if (file && file.type.startsWith('image/')) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <div
      onDrop={(e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
        setIsHover(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setIsHover(true);
      }}
      onDragLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => document.getElementById('fileInput').click()}
      style={{
        border: `2px dashed ${isHover ? '#3b82f6' : '#d1d5db'}`,
        padding: '50px',
        borderRadius: '18px',
        background: isHover
          ? '#f0f7ff'
          : 'linear-gradient(145deg, #f9fafb, #ffffff)',
        cursor: 'pointer',
        marginBottom: '20px',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        boxShadow: isHover
          ? '0 6px 18px rgba(59,130,246,0.2)'
          : '0 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      <p
        style={{
          color: '#6b7280',
          fontSize: '15px',
          marginBottom: '10px',
        }}
      >
        Drag & drop your file here or{' '}
        <span style={{ color: '#3b82f6', fontWeight: '500' }}>
          browse
        </span>
      </p>

      <input
        id="fileInput"
        type="file"
        hidden
        onChange={(e) => handleFile(e.target.files[0])}
      />

      {preview && (
        <img
          src={preview}
          alt="preview"
          style={{
            maxWidth: '100%',
            marginTop: '15px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        />
      )}
    </div>
  );
}

// ---------------- MAIN PAGE ----------------
export default function Home() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!file) return alert('Select a file first');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/upload`,
        formData,
        {
          onUploadProgress: (event) => {
            setProgress(
              Math.round((event.loaded * 100) / event.total)
            );
          },
        }
      );

      setUploadedFile(res.data);
      setFile(null);
      setProgress(0);
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.error || 'Upload failed');
    }
  };

  return (
    <div
      style={{
        width: 500,
        margin: '50px auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>File Upload</h1>

      <Dropzone setFile={setFile} />

      <form onSubmit={onSubmit}>
        <button
          disabled={!file}
          style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            background: file ? '#3b82f6' : '#9ca3af',
            color: 'white',
            cursor: file ? 'pointer' : 'not-allowed',
            transition: '0.3s',
          }}
        >
          Upload
        </button>
      </form>

      {progress > 0 && (
        <p style={{ marginTop: '10px' }}>Uploading: {progress}%</p>
      )}

      {uploadedFile && (
        <p style={{ marginTop: '15px' }}>
          Uploaded:{' '}
          <a
            href={`${BACKEND_URL}${uploadedFile.url}`}
            target="_blank"
            style={{ color: '#3b82f6' }}
          >
            {uploadedFile.filename}
          </a>
        </p>
      )}
    </div>
  );
}