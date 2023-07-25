function formatDate(dateString:Date) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${month} ${day}, ${year}`;
  }
  
  
 export { formatDate }
  