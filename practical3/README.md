File Upload Application
Project Overview
The project is a File Upload application that I built using React and Next.js to demonstrate practical implementations of multipart form data handling, file validations, upload progress tracking, and drag and drop functionality. This project enables users to upload files by either dragging and dropping them into a designated area or clicking to browse and select files manually, with real-time upload progress feedback and a preview of uploaded files.

Technology Stack
Framework: Next.js (React-based)

Form Handling: React Hook Form

HTTP Requests: Axios

Drag and Drop: React Dropzone

Server-side Parsing: Formidable

Language: JavaScript/JSX

Setup Instructions
Create the Next.js project

bash
npx create-next-app file-upload
cd file-upload
Install dependencies

bash
npm install react-hook-form formidable axios react-dropzone
Start development server

bash
npm run dev
Open the application
Navigate to http://localhost:3000 in your browser

Application Structure
State Management (Home Component):
Three React state hooks are used to manage:

file - The selected file

progress - Upload progress percentage

uploadedFile - Server response after successful upload

Component Organization:
Dropzone Component - Custom component for drag and drop interface

Home Component - Main component handling state and upload logic

Key Features Implemented
Drag and Drop Interface:
Users can drag and drop files into a designated box or click on the box to bring up the file select dialog. When a file is selected, it gets passed to the parent component using setFile(file).

File Preview:
If the selected file is an image, the application generates an immediate visual preview using:
javascript
URL.createObjectURL(file)
File Selection Methods:
File selections can occur through two approaches:

Dragging and dropping files (onDrop event)

Selecting files manually (type="file" input)

Form Submission:
Upon clicking the Upload button:
Form submission is prevented with e.preventDefault()
A new FormData object is created
The file is appended as formData.append('file', file)
The file is sent in multipart/form-data format

Upload Progress Tracking:
Axios onUploadProgress event tracks upload progress in real-time:

javascript
Math.round((event.loaded * 100) / event.total)
The percentage value is displayed dynamically to the user during upload.

Response Handling:
Upon successful upload:
Server response is saved to uploadedFile state
File state is reset
Progress is set back to zero

Uploaded File Display:
After upload completion, the uploaded file is shown as a hyperlink formed using:

text
/uploads/{filename}
This enables users to access the uploaded file directly.

Challenges Encountered and Solutions
Default browser actions preventing proper drag and drop file uploading, however used event.preventDefault() in the event handler
Difficulty calculating and displaying upload progress percentage, however used event.loaded and event.total values from Axios onUploadProgress event.

Important Notes
File validations for type and size should be implemented at both client and server levels to ensure security and prevent server overload

The backend API route should be properly configured using Next.js API routes with the Formidable library

Upload progress tracking provides responsive UI feedback which significantly improves user experience during file transfers

What I Learned
This project helped me better understand:
How to manage state within React using useState hooks
How to handle various events including drag and drop events and form submission events
How to connect frontend components with backend APIs using Axios
How to implement real-time progress feedback for asynchronous operations
Practical knowledge in developing user-friendly frontend applications with file handling capabilities