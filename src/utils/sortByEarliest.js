export default function sortByEarliest(a, b) {
    const firstDateA = a.dates[0].date;
    const firstDateB = b.dates[0].date;
  
    if (firstDateA < firstDateB) {
      return -1;
    } else if (firstDateB < firstDateA) {
      return 1;
    }
  
    return 0;
  }