import React, { useCallback,useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ previewImage, onFileSelect }) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (previewImage) {
      setFile({
        file: null,  // Pas besoin de stocker le fichier, car nous avons déjà l'URL dans previewImage
        preview: previewImage
      });
    }
  }, [previewImage]);

  const onDrop = useCallback((acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setFile({
      file: uploadedFile,
      preview: URL.createObjectURL(uploadedFile)
    });

    if (onFileSelect) {
      onFileSelect(uploadedFile);
    }
  }, [onFileSelect]);

  const removeFile = (e) => {
    e.stopPropagation();
    URL.revokeObjectURL(file.preview);
    setFile(null);

    if (onFileSelect) {
      onFileSelect(null);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="dropzone dropzone-queue my-2" {...getRootProps()} style={styles.dropzone}>
      <input {...getInputProps()} />
      <div className="dropzone-panel p-4 align-items-center">
        <a className={`dropzone-select btn btn-sm ${file ? 'btn-danger' : 'btn-success'} me-2`} onClick={file ? removeFile : null}>
          {file ? 'Supprimer' : 'Charger un fichier'}
        </a>
      </div>
      <div className="dropzone-items wm-200px">
        {file ? (
          <div className="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">
            <div 
              className="image-input-wrapper w-125px h-125px" 
              style={{ 
                backgroundSize: 'auto calc(0% + 10rem)', 
                backgroundPositionX: '100%', 
                backgroundImage: `url(${file.preview || 'assets/media/svg/files/blank-image.svg'})` 
              }}
            />
            <label className="btn btn-icon">
              {file && file.file && (
                <span className="form-text fs-6 text-muted">
                  {file.file.name}
                </span>
              )}
            </label>
          </div>
        ) : (
          previewImage && (
            <div className="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">
              <div 
                className="image-input-wrapper w-125px h-125px" 
                style={{ 
                  backgroundSize: 'auto calc(0% + 10rem)', 
                  backgroundPositionX: '100%', 
                  backgroundImage: `url(${previewImage || 'assets/media/svg/files/blank-image.svg'})` 
                }}
              />
              <div className="dz-default dz-message">
                <button className="dz-button" type="button">
                  Drop files here to upload
                </button>
              </div>
            </div>
          )
        )}
      </div>
      <span className="form-text fs-6 text-muted">
        Max file size is 1MB per file.
      </span>
    </div>
  );
};

const styles = {
  dropzone: {
    border: '2px dashed #cccccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginBottom: '20px'
  }
};

export default FileUploader;
