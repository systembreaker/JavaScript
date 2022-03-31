function showinfo(
  username = "unknown",
  age = "unknown",
  hourRate = 0,
  sh = "yes",
  ...sk
) {
  document.write(`<div>`);
  document.write(`<h2> Welcome Mr: ${username} 🙌</h2>`);
  document.write(`<p>you'r  Age is: ${age}😎</p>`);
  document.write(`<p>you'r  HoureRate is: $${hourRate}</p>`);
  if (sh === "yes") {
    if (sk.length > 0) {
      document.write(
        `<p> Mr ${username} There Is Some Skilles 🐱‍👤😎👍 On Your Profile To Show  and your Skilles is <h3>${sk.join(
          "|"
        )}</h3></p>`
      );
    } else {
      document.write(
        `<p> Mr ${username} There Is No ⛔😲 Skilles On Your Profile To Show </p>`
      );
    }
  } else {
    document.write(`<p> Mr ${username} your ⛔😲 Skilles is hidden </p>`);
  }

  document.write(`<br><hr>`);
  document.write(`</div>`);
}
showinfo(
  "Alaa",
  27,
  50,
  "yes",
  "html ",
  "css ",
  "javascript ",
  "vuejs",
  "react"
);
showinfo(
  "Ahmad",
  27,
  10020,
  "no",
  "html ",
  "css ",
  "javascript ",
  "vuejs",
  "react"
);
