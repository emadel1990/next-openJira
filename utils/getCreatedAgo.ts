export const getCreatedAgo = (seconds: number) => {
  const time = new Date(seconds);
  const now = new Date();
  const diff = (now.getTime() - time.getTime()) / 1000;
  if (diff < 60) {
    return `${Math.round(diff)} seconds ago`;
  } else if (diff < 3600) {
    return `${Math.round(diff / 60)} minutes ago`;
  } else if (diff < 86400) {
    return `${Math.round(diff / 3600)} hours ago`;
  } else if (diff < 604800) {
    return `${Math.round(diff / 86400)} days ago`;
  } else if (diff < 2592000) {
    return `${Math.round(diff / 604800)} weeks ago`;
  } else if (diff < 31536000) {
    return `${Math.round(diff / 2592000)} months ago`;
  } else if (diff < 315360000) {
    return `${Math.round(diff / 31536000)} years ago`;
  } else {
    return `${Math.round(diff / 315360000)} decades ago`;
  }
};
