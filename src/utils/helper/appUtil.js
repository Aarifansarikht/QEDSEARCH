import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
export const downloadFile = async (fileUrl, fileName) => {
  try {
    alert('Downloading..');

    // Append a timestamp to the filename to make it unique
    let array = fileName.split('.');
    array[0] = array[0] + new Date().getTime();
    const destinationPath = `${RNFS.DownloadDirectoryPath}/${array.join('.')}`;

    // Download the file
    await RNFS.downloadFile({
      fromUrl: fileUrl,
      toFile: destinationPath,
    }).promise;

    console.log('File downloaded successfully:', destinationPath);

    // Show a success message
    alert('File downloaded successfully! Find it in the Downloads folder');

    // Open the downloaded file using a file viewer
  } catch (error) {
    console.error('Error downloading file:', error);

    // Show an error message
    alert('Something went wrong while downloading the file.');
  }
};
