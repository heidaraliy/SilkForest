import { saveDownloadInfo } from "../../../firebase/services/downloadService";

export const handleDownload = async (
  email: string,
  downloadUrl: string,
  productId: string
) => {
  try {
    const saved = await saveDownloadInfo(email, productId);
    if (!saved) {
      throw new Error("Failed to save download information");
    }

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (error) {
    console.error("Download failed:", error);
    throw error;
  }
};
