// FizzBuzz Variation (with Emoji)
for (let i = 1; i <= 30; i++) {
    let output = '';
    if (i % 3 === 0) output += '🍕';
    if (i % 5 === 0) output += '🎉';
    console.log(output || i);
  }
  