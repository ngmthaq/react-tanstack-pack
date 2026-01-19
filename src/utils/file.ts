import { FILE_CONFIGS } from "@/constants";
import type { FileSizeUnit } from "@/types/common";

export function downloadFile(file: Blob, filename: string) {
  const url = window.URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

export function convertFileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}

export function convertBase64ToFile(
  base64String: string,
  filename: string,
  mimeType: string,
) {
  const base64 = base64String.split(",")[1] || base64String;
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeType });
  return new File([blob], filename, { type: mimeType });
}

export function formatFileSize(sizeInBytes: number): string {
  const { oneKbEqualsBytes } = FILE_CONFIGS;

  let size = oneKbEqualsBytes;
  if (sizeInBytes < size) {
    return `${sizeInBytes}B`;
  }

  size = size * oneKbEqualsBytes;
  if (sizeInBytes < size) {
    return `≈${(sizeInBytes / size).toFixed(2)}KB`;
  }

  size = size * oneKbEqualsBytes;
  if (sizeInBytes < size) {
    return `≈${(sizeInBytes / size).toFixed(2)}MB`;
  }

  size = size * oneKbEqualsBytes;
  if (sizeInBytes < size) {
    return `≈${(sizeInBytes / size).toFixed(2)}GB`;
  }

  size = size * oneKbEqualsBytes;
  return `≈${(sizeInBytes / size).toFixed(2)}TB`;
}

export function convertFileSize(
  size: number,
  from: FileSizeUnit,
  to: FileSizeUnit,
): number {
  function getUnitExponent(unit: FileSizeUnit): number {
    switch (unit) {
      case "B":
        return 0;
      case "KB":
        return 1;
      case "MB":
        return 2;
      case "GB":
        return 3;
      case "TB":
        return 4;
      default:
        throw new Error(`Unsupported file size unit: ${unit}`);
    }
  }
  const { oneKbEqualsBytes } = FILE_CONFIGS;
  const sizeInBytes = size * Math.pow(oneKbEqualsBytes, getUnitExponent(from));
  return sizeInBytes / Math.pow(oneKbEqualsBytes, getUnitExponent(to));
}
