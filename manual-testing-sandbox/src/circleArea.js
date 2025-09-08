function calculateCircleArea(radius) {
  const pi = Math.PI;

  return pi * (radius ** 2);
}



function calculateCircleCircumference(radius) {
  const pi = Math.PI;

  return 2 * pi * radius;
}

// דוגמת שימוש
const radius = 5; // רדיוס המעגל
const area = calculateCircleArea(radius);
const circumference = calculateCircleCircumference(radius);
console.log(`שטח המעגל הוא: ${area}`);
console.log(`היקף המעגל הוא: ${circumference}`);