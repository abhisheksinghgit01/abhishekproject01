function isLeapYear(year) {
    // check if divisible by 400 first, as it takes precedence
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        // Not a leap year if divisible by 100 but not 400
        return false;
    } else {
        // Otherwise, check if divisible by 4
        return year % 4 === 0;
        }
    }
        // Example usage 
        const year = 2024;
        if (isLeapYear(year)) {
            console.log("$(year) is a leap year.");
    } else { 
      console.log("$(year) is not a leap year);
    }