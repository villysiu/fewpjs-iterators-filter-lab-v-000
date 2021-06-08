// Code your solution here

function findMatching(drivers, driverString) {
    let matched = drivers.filter(n => {
      return n.match(new RegExp(driverString, 'i'));
    });
    return matched;
  }
  function fuzzyMatch(drivers, driverString) {
    let matched = drivers.filter(n => {
      return n.match(new RegExp('^' + driverString));
    });
    return matched;
  }
  
  function matchName(drivers, driverString) {
    let matched = drivers.filter(n => {
      return n.name.match(new RegExp(driverString, 'i'));
    });
    return matched;
  }
