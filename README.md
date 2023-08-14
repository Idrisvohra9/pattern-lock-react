This is a keypad lock pattern authenticator project in which the user can set a numeric pin and can dynamically modify the pattern format afterwards. No one but the pattern setter knows the technique to decrypt the original pin.


It is a unique idea, and it motivates me to create a React NPM package in the near future.


Some technical information about the pattern formats and how it all works:
Pattern format characters and their encryption techniques:
To learn the encryption and decryption techniques we will assume the set pin is: "1132".


"P" => Sorts the original pattern and the keypad numbers in ascending order. So, the pattern will now become: "1123"
"Q" => Shuffles the pattern and the keypad numbers and swaps odd numbers with even numbers. So, the pattern will now become: "1312"
"R" => Reverses the pattern and the keypad numbers. So, the pattern will now become: "2311"
"S" => Shuffles the pattern and the keypad numbers first even then odd. So the pattern will now become: "2311"