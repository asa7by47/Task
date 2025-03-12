function formatFileSize(fileSize: number): string {
  if (fileSize < 1024) {
    // If size is less than 1KB, show in bytes
    return `${fileSize} bytes`;
  }

  if (fileSize < 1024 * 1024) {
    // If size is less than 1MB, show in KB
    const sizeInKB = (fileSize / 1024).toFixed(2); // Convert to KB with 2 decimal places
    return `${sizeInKB} KB`;
  }

  // Otherwise, show in MB
  const sizeInMB = (fileSize / (1024 * 1024)).toFixed(2); // Convert to MB with 2 decimal places
  return `${sizeInMB} MB`;
}

export default formatFileSize;
