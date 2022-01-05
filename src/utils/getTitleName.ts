export default function getTitleName(title: string): string {
  switch (title.toLowerCase()) {
    case 'wishlist':
      return 'my favourites';
    default:
      return title;
  }
}