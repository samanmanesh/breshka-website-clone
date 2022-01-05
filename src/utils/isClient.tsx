export default function isClient() {
  try {
    if (!window) return false;
  } catch (err) {
    return false;
  }

  return true;
}
