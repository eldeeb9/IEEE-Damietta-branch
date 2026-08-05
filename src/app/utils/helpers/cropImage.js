// cropImage.js
export const getCroppedImg = (imageSrc, pixelCrop) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
      image.crossOrigin = 'anonymous'; // Avoids CORS issues if loading remote URLs
  
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        if (!ctx) {
          reject(new Error('No 2d context'));
          return;
        }
  
        // Set canvas size matching the cropped area size
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
  
        // Draw the cropped area from source image to canvas
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );
  
        // Convert canvas to a Base64 URL (or canvas.toBlob() for server uploads)
        const base64Image = canvas.toDataURL('image/jpeg');
        resolve(base64Image);
      };
  
      image.onerror = (error) => reject(error);
    });
  };
  