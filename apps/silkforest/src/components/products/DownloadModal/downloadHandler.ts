export const handleDownload = async (email: string, downloadUrl: string) => {
  // simulating api call:
  // probably will be a supabase call, after more research -- implement later!
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const link = document.createElement("a");
  link.href = downloadUrl;
  link.setAttribute("download", "");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
