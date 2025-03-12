export default function getTimeDifference(createdAt: string): string {
  const createdDate = new Date(createdAt);
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - createdDate.getTime()) / 1000
  );

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s`;
  }
  if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    return `${diffInMinutes}m`;
  }
  if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600);
    return `${diffInHours}h`;
  }
  const diffInDays = Math.floor(diffInSeconds / 86400);
  return `${diffInDays}d`;
}
